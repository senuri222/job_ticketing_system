const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'your_secret_key';

exports.signup = async (req, res) => {
  const { email, password, role } = req.body;
  const db = req.db;

  if (!email || !password || !role) {
    return res.status(400).json({ message: 'Email, password, and role required' });
  }

  try {
    const existing = await db.collection('users').where('email', '==', email).get();
    if (!existing.empty) {
      return res.status(409).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = {
      email,
      password: hashedPassword,
      role
    };

    await db.collection('users').add(newUser);
    res.status(201).json({ message: 'User created' });
  } catch (err) {
    res.status(500).json({ message: 'Signup failed', error: err.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const db = req.db;

  try {
    const snapshot = await db.collection('users').where('email', '==', email).get();
    if (snapshot.empty) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const userDoc = snapshot.docs[0];
    const user = userDoc.data();

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { uid: userDoc.id, email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: '1h' }
    );

    //  Send both token and role
    res.json({ token, role: user.role });
    

  } catch (err) {
    res.status(500).json({ message: 'Login failed', error: err.message });
  }
};

