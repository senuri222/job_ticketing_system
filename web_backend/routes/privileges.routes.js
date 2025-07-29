const express = require('express');
const router = express.Router();
const privilegeController = require('../controllers/privileges.controller');
const { authenticate, authorizeRoles } = require('../middleware/auth.middleware');

// All routes below require: Logged in + Role = admin
router.use(authenticate, authorizeRoles('admin'));

router.post('/', privilegeController.createPrivilege);
router.get('/', privilegeController.getAllPrivileges);
router.put('/:id', privilegeController.updatePrivilege);
router.delete('/:id', privilegeController.deletePrivilege);
router.get('/:id', privilegeController.getPrivilegeById);

module.exports = router;
