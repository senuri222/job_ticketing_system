const express = require('express');
const router = express.Router();
const machineController = require('../controllers/submitMachines.controller');
const { authenticate, authorizeRoles } = require('../middleware/auth.middleware');

// All routes require authentication
router.use(authenticate);

// POST - Only 'customer' can create a machine
router.post('/machine', authorizeRoles('customer'), machineController.createMachine);

// PUT - 'customer' and 'teamleader' can update a machine
router.put('/machine/:id', authorizeRoles('customer', 'teamleader'), machineController.updateMachine);

// DELETE - Only 'teamleader' can delete a machine
router.delete('/machine/:id', authorizeRoles('teamleader'), machineController.deleteMachine);

// GET by ID - Only 'teamleader' can view a specific machine
router.get('/machine/:id', authorizeRoles('teamleader'), machineController.getMachineById);

// GET all - Only 'teamleader' can view all machines
router.get('/machine', authorizeRoles('teamleader'), machineController.getAllMachines);

module.exports = router;
