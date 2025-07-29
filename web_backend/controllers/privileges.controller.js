const { v4: uuidv4 } = require('uuid');

exports.createPrivilege = async (req, res) => {
  const db = req.db;
  const { action, admin, teamleader, manager, technician, customer } = req.body;

  // Check required field
  if (!action) {
    return res.status(400).json({ message: 'Action field is required.' });
  }

  try {
    // 1. Check if a privilege with this action already exists
    const existingSnapshot = await db
      .collection('privileges')
      .where('action', '==', action)
      .get();

    if (!existingSnapshot.empty) {
      return res.status(409).json({ message: 'Privilege with this action already exists.' });
    }

    // 2. Add new privilege
    const privilege = {
      id: uuidv4(),
      action,
      admin : false,
      teamleader: false,
      manager: false,
      technician: false,
      customer: false,
      date: new Date().toISOString()
    };

    await db.collection('privileges').add(privilege);

    res.status(201).json({ message: 'Privilege created successfully.' });
  } catch (err) {
    res.status(500).json({ message: 'Creation failed', error: err.message });
  }
};

// Get all privileges
exports.getAllPrivileges = async (req, res) => {
  const db = req.db;
  try {
    const snapshot = await db.collection('privileges').get();
    const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: 'Fetch failed', error: err.message });
  }
};

// Update privilege
exports.updatePrivilege = async (req, res) => {
  const db = req.db;
  const { id } = req.params;

  try {
    const snapshot = await db.collection('privileges').where('id', '==', id).get();

    if (snapshot.empty) {
      return res.status(404).json({ message: 'Privilege not found' });
    }

    const docId = snapshot.docs[0].id;

    await db.collection('privileges').doc(docId).update(req.body);

    res.json({ message: 'Privilege updated' });
  } catch (err) {
    res.status(500).json({ message: 'Update failed', error: err.message });
  }
};

// get privilege by id
exports.getPrivilegeById = async (req, res) => {
  const db = req.db;
  const { id } = req.params;
  try {
    const snapshot = await db.collection('privileges').where('id', '==', id).get();

    if (snapshot.empty) {
      return res.status(404).json({ message: 'Privilege not found' });
    }
    const doc = snapshot.docs[0];

    res.json({ id: doc.id, ...doc.data() });
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch Privilege', error: err.message });
  }
};

// Delete privilege
exports.deletePrivilege = async (req, res) => {
  const db = req.db;
  const { id } = req.params;

  try {
    const snapshot = await db.collection('privileges').where('id', '==', id).get();

    if (snapshot.empty) {
      return res.status(404).json({ message: 'Privilege not found' });
    }

    const docId = snapshot.docs[0].id;

    await db.collection('privileges').doc(docId).delete();

    res.json({ message: 'Privilege deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Delete failed', error: err.message });
  }
};


