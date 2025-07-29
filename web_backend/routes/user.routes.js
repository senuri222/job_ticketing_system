const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const { authenticate, authorizeRoles } = require('../middleware/auth.middleware');

// Allow all logged-in users to get user by email
router.get('/email/:email', authenticate, userController.getUserByEmail);

router.get('/role/:role', authenticate, authorizeRoles('teamleader'), userController.getUsersByRole);

// All routes below require: Logged in + Role = admin
router.use(authenticate, authorizeRoles('admin'));

router.post('/', userController.createUser);
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
