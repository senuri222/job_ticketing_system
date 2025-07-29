// ... same imports
const { FieldValue } = require('firebase-admin/firestore');
const { v4: uuidv4 } = require('uuid');

// CREATE or UPDATE QUANTITY
exports.createSparePart = async (req, res) => {
  const db = req.db;
  const {
    spno,
    spname,
    partType,
    seller,
    buyingPrice,
    sellingPrice,
    quentity,
    modal,
    remark
  } = req.body;

  // Validation
  if (!spno || !spname || !partType || !seller || !buyingPrice || !sellingPrice || !quentity || !modal) {
    return res.status(400).json({ message: 'Please fill all required fields!' });
  }

  const quantityNumber = parseInt(quentity);
  const buyingPriceNumber = parseFloat(buyingPrice);
  const sellingPriceNumber = parseFloat(sellingPrice);

  if (isNaN(quantityNumber) || quantityNumber < 1) {
    return res.status(400).json({ message: 'Invalid quantity' });
  }

  if (isNaN(buyingPriceNumber) || isNaN(sellingPriceNumber)) {
    return res.status(400).json({ message: 'Invalid prices' });
  }

  if (sellingPriceNumber < buyingPriceNumber) {
    return res.status(400).json({ message: 'Recheck Prices!' });
  }

  try {
    // Match by all 5 fields
    const existingQuery = await db.collection('spareparts')
      .where('spno', '==', spno)
      .where('spname', '==', spname)
      .where('partType', '==', partType)
      .where('seller', '==', seller)
      .where('modal', '==', modal)
      .where('status', '==', 'active')
      .limit(1)
      .get();

    if (!existingQuery.empty) {
      // Exists → update quantity
      const existingDoc = existingQuery.docs[0];
      let existingQuantity = existingDoc.data().quentity;

      if (typeof existingQuantity === 'string') {
        existingQuantity = parseInt(existingQuantity);
      }
      if (isNaN(existingQuantity)) existingQuantity = 0;

      await existingDoc.ref.update({
        quentity: existingQuantity + quantityNumber,
        updatedAt: FieldValue.serverTimestamp()
      });

      return res.status(200).json({ message: 'Quantity updated for existing sparepart' });
    }

    // Create new
    const spid = uuidv4();
    const date = new Date().toISOString();
    const status = 'active';
    const bin = 'mainbin';

    const newSparePart = {
      spid,
      spno,
      spname,
      partType,
      seller,
      buyingPrice: buyingPriceNumber,
      bin,
      sellingPrice: sellingPriceNumber,
      quentity: quantityNumber,
      modal,
      remark,
      status,
      date
    };

    await db.collection('spareparts').add(newSparePart);
    res.status(201).json({ message: 'Sparepart added successfully' });

  } catch (err) {
    res.status(500).json({ message: 'Failed to add Sparepart', error: err.message });
  }
};


// GET ALL (only active)
exports.getAllSpareparts = async (req, res) => {
  const db = req.db;
  try {
    const snapshot = await db.collection('spareparts')
      .where('status', '==', 'active')
      .get();

    const spareparts = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    res.json(spareparts);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch spare parts', error: err.message });
  }
};

// GET BY ID (only if active)
exports.getSparepartsById = async (req, res) => {
  const db = req.db;
  const { id } = req.params;
  try {
    const doc = await db.collection('spareparts').doc(id).get();
    if (!doc.exists) {
      return res.status(404).json({ message: 'Spare Part not found' });
    }

    const data = doc.data();
    if (data.status !== 'active') {
      return res.status(404).json({ message: 'Spare Part not found' });
    }

    res.json({ id: doc.id, ...data });
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch sparepart', error: err.message });
  }
};

// GET BY NAME (only active)
exports.getSparepartByName = async (req, res) => {
  const db = req.db;
  const { spname } = req.params;

  if (!spname) {
    return res.status(400).json({ message: 'Spare Part name is required' });
  }

  try {
    const snapshot = await db.collection('spareparts')
      .where('spname', '==', spname)
      .where('status', '==', 'active')
      .get();

    if (snapshot.empty) {
      return res.status(404).json({ message: 'No spare parts found with that name' });
    }

    const results = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    res.json(results);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch spare parts', error: err.message });
  }
};

// GET BY MODAL (only active)
exports.getSparepartByModal = async (req, res) => {
  const db = req.db;
  const { modal } = req.params;

  if (!modal) {
    return res.status(400).json({ message: 'Spare Part modal is required' });
  }

  try {
    const snapshot = await db.collection('spareparts')
      .where('modal', '==', modal)
      .where('status', '==', 'active')
      .get();

    if (snapshot.empty) {
      return res.status(404).json({ message: 'No spare parts found with that modal' });
    }

    const results = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    res.json(results);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch spare parts', error: err.message });
  }
};

// GET BY NAME & MODAL (only active)
exports.getSparepartByNameAndModal = async (req, res) => {
  const db = req.db;
  const { spname, modal } = req.query;

  if (!spname || !modal) {
    return res.status(400).json({ message: 'Both spare part name and modal are required' });
  }

  try {
    const snapshot = await db.collection('spareparts')
      .where('spname', '==', spname)
      .where('modal', '==', modal)
      .where('status', '==', 'active')
      .get();

    if (snapshot.empty) {
      return res.status(404).json({ message: 'Spare Part not found' });
    }

    const results = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    res.json(results);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch spare parts', error: err.message });
  }
};

// UPDATE
exports.updateSparePart = async (req, res) => {
  const db = req.db;
  const { id } = req.params;
  const {
    spno,
    spname,
    partType,
    seller,
    buyingPrice,
    bin,
    sellingPrice,
    quentity,
    modal,
    remark,
    status
  } = req.body;

  try {
    const updateData = {};

    if (spno) updateData.spno = spno;
    if (spname) updateData.spname = spname;
    if (partType) updateData.partType = partType;
    if (seller) updateData.seller = seller;
    if (buyingPrice) updateData.buyingPrice = buyingPrice;
    if (bin) updateData.bin = bin;
    if (sellingPrice) updateData.sellingPrice = sellingPrice;
    if (quentity) updateData.quentity = quentity;
    if (modal) updateData.modal = modal;
    if (remark) updateData.remark = remark;
    if (status) updateData.status = status;

    updateData.updatedAt = FieldValue.serverTimestamp();

    await db.collection('spareparts').doc(id).update(updateData);

    res.json({ message: 'spareparts updated successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to update spareparts', error: err.message });
  }
};

// SOFT DELETE
exports.deleteSpareparts = async (req, res) => {
  const db = req.db;
  const { id } = req.params;

  try {
    await db.collection('spareparts').doc(id).update({
      status: 'inactive',
      deletedAt: FieldValue.serverTimestamp()
    });

    res.json({ message: 'sparepart marked as deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete sparepart', error: err.message });
  }
};

// ADVANCED SEARCH
exports.searchSparepartsAdvanced = async (req, res) => {
  const db = req.db;
  const {
    spno,
    spname,
    partType,
    modal
  } = req.query;

  try {
    let query = db.collection('spareparts').where('status', '==', 'active');

    if (spno) {
      query = query.where('spno', '==', spno);
    }
    if (spname) {
      query = query.where('spname', '==', spname);
    }
    if (partType) {
      query = query.where('partType', '==', partType);
    }
    if (modal) {
      query = query.where('modal', '==', modal);
    }

    const snapshot = await query.get();

    if (snapshot.empty) {
      return res.status(404).json({ message: 'No spare parts matched the search criteria' });
    }

    const results = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    res.json(results);
  } catch (err) {
    res.status(500).json({ message: 'Failed to perform advanced search', error: err.message });
  }
};

// HARD DELETE
exports.hardDeleteSparepart = async (req, res) => {
  const db = req.db;
  const { id } = req.params;

  try {
    await db.collection('spareparts').doc(id).delete();
    res.json({ message: 'Sparepart permanently deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to hard delete sparepart', error: err.message });
  }
};
