const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid'); 
const { FieldValue } = require('firebase-admin/firestore');

exports.createUser = async (req, res) => {
  const db = req.db;
  const { nicno, name, email, address, mobileno, gender, role, password } = req.body;

  // Basic validation
  if (!nicno || !name || !email || !address || !mobileno || !gender || !role || !password) {
    return res.status(400).json({ message: 'Please fill all required fields!' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const nicRegex = /^([0-9]{9}[VXvx]|[0-9]{12})$/;
  const mobileRegex = /^07\d{8}$/

  if (!emailRegex.test(email)) {
   return res.status(400).json({ message: 'Invalid email format' });
  }

  if (password.length < 8) {
    return res.status(400).json({ message: 'Password must be at least 8 characters long' });
  }

  if (!nicRegex.test(nicno)) {
    return res.status(400).json({ message: 'Invalid NIC number format' });
  }

  if (!mobileRegex.test(mobileno)) {
    return res.status(400).json({ message: 'Invalid mobile number format' });
  }

  try {
    // Check if user already exists
    const existing = await db.collection('users')
      .where('email', '==', email)
      .where('role', '==', role)
      .get();

    if (!existing.empty) {
      return res.status(409).json({ message: 'User with this email and role already exists' });
    }

    // Auto-generate values
    const userid = uuidv4();
    const date = new Date().toISOString(); // current date in ISO format
    const status = 'active';

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user object
    const newUser = {
      userid,
      nicno,
      name,
      email,
      emailLower: email.toLowerCase(),
      address,
      mobileno,
      gender,
      role,
      password: hashedPassword,
      status,
      date
    };

    // Add user to Firestore
    await db.collection('users').add(newUser);

    res.status(201).json({ message: 'User added successfully' });

  } catch (err) {
    res.status(500).json({ message: 'Failed to add user', error: err.message });
  }
};


exports.getAllUsers = async (req, res) => {
  const db = req.db;
  try {
    const snapshot = await db.collection('users').get();
    const users = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch users', error: err.message });
  }
};

exports.getUserById = async (req, res) => {
  const db = req.db;
  const { id } = req.params;
  try {
    const doc = await db.collection('users').doc(id).get();
    if (!doc.exists) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ id: doc.id, ...doc.data() });
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch user', error: err.message });
  }
};

exports.getUserByEmail = async (req, res) => {
  const db = req.db;
  const { email } = req.params;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  try {
    const snapshot = await db.collection('users')
      .where('emailLower', '==', email.toLowerCase())
      .get();

    if (snapshot.empty) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Assuming email is unique, take the first match
    const doc = snapshot.docs[0];
    res.json({ id: doc.id, ...doc.data() });

  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch user', error: err.message });
  }
};

//update user
exports.updateUser = async (req, res) => {
  const db = req.db;
  const { id } = req.params;
  const {
    nicno,
    name,
    email,
    address,
    mobileno,
    gender,
    role,
    status,
    password
  } = req.body;

  try {
    const updateData = {};

    if (nicno) updateData.nicno = nicno;
    if (name) {
      updateData.name = name;
    }
    if (email) {
      updateData.email = email;
      updateData.emailLower = email.toLowerCase();
    }
    if (address) updateData.address = address;
    if (mobileno) updateData.mobileno = mobileno;
    if (gender) updateData.gender = gender;
    if (role) {
      updateData.role = role;
      updateData.roleLower = role.toLowerCase();
    }
    if (status) updateData.status = status;

    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      updateData.password = hashedPassword;
    }

    await db.collection('users').doc(id).update(updateData);

    res.json({ message: 'User updated successfully' });

  } catch (err) {
    res.status(500).json({ message: 'Failed to update user', error: err.message });
  }
};


exports.deleteUser = async (req, res) => {
  const db = req.db;
  const { id } = req.params;

  try {
    await db.collection('users').doc(id).update({
      status: 'inactive',
      deletedAt: FieldValue.serverTimestamp() // optional: log time of deletion
    });

    res.json({ message: 'User marked as deleted' });

  } catch (err) {
    res.status(500).json({ message: 'Failed to delete user', error: err.message });
  }
};

// GET users by role
exports.getUsersByRole = async (req, res) => {
  const db = req.db;
  const { role } = req.params;

  try {
    const snapshot = await db.collection('users')
      .where('role', '==', role)
      // .where('status', '==', 'active')
      .get();

    const users = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch users by role', error: err.message });
  }
};
