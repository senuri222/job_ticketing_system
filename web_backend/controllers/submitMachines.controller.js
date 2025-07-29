const { v4: uuidv4 } = require('uuid');
const { FieldValue } = require('firebase-admin/firestore');

// CREATE Machine
exports.createMachine = async (req, res) => {
  const db = req.db;
  try {
    const data = {
      bank: req.body.bank,
      createdAt: new Date().toISOString(),
      issue: req.body.issue,
      modal: req.body.modal,
      serialNumber: req.body.serialNumber,
      status: req.body.status,
      updatedAt: FieldValue.serverTimestamp()
    };

    const docRef = await db.collection('machine').add(data); // Auto-generated ID
    res.status(201).json({ message: 'Machine submitted successfully', id: docRef.id });
  } catch (error) {
    res.status(500).json({ message: 'Error creating machine submit', error: error.message });
  }
};


// READ ALL Machines
exports.getAllMachines = async (req, res) => {
  const db = req.db;
  try {
    const snapshot = await db.collection('machine').get();
    const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching machines', error: error.message });
  }
};

// READ Machine by ID
exports.getMachineById = async (req, res) => {
  const db = req.db;
  try {
    const id = req.params.id;
    const doc = await db.collection('machine').doc(id).get();

    if (!doc.exists) {
      return res.status(404).json({ message: 'Machine not found' });
    }

    res.status(200).json({ id: doc.id, ...doc.data() });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching machine', error: error.message });
  }
};

// UPDATE Machine
exports.updateMachine = async (req, res) => {
  const db = req.db;
  try {
    const id = req.params.id;
    const updateData = {
      ...req.body,
      updatedAt: FieldValue.serverTimestamp()
    };

    await db.collection('machine').doc(id).update(updateData);
    res.status(200).json({ message: 'Machine updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating machine', error: error.message });
  }
};

// DELETE Machine
exports.deleteMachine = async (req, res) => {
  const db = req.db;
  try {
    const id = req.params.id;
    await db.collection('machine').doc(id).delete();
    res.status(200).json({ message: 'Machine deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting machine', error: error.message });
  }
};
