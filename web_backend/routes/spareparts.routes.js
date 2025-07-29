const express = require('express');
const router = express.Router();
const sparepartController = require('../controllers/spareparts.controller');
const { authenticate, authorizeRoles } = require('../middleware/auth.middleware');

router.use(authenticate, authorizeRoles('admin'));

router.post('/', sparepartController.createSparePart);
router.get('/', sparepartController.getAllSpareparts);
router.get('/:id', sparepartController.getSparepartsById);
router.get('/name/:spname', sparepartController.getSparepartByName);
router.get('/name/:modal', sparepartController.getSparepartByModal);
router.put('/:id', sparepartController.updateSparePart);
router.delete('/:id', sparepartController.deleteSpareparts);
router.delete('/:id/hard', sparepartController.hardDeleteSparepart);
router.get('/search', sparepartController.searchSparepartsAdvanced);  // http://localhost:3000/api/sparepart/spareparts/search?

module.exports = router;