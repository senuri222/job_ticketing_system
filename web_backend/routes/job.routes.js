const express = require('express');
const router = express.Router();
const jobController = require('../controllers/job.controller');
const { authenticate, authorizeRoles } = require('../middleware/auth.middleware');

// All routes below require: Logged in + Role = admin
router.use(authenticate, authorizeRoles('teamleader', 'technician'));

router.post('/', jobController.createJob);
router.get('/', jobController.getAllJobs);
router.get('/:id', jobController.getJobById);
router.put('/:id', jobController.updateJob);
router.delete('/:id', jobController.deleteJob);

module.exports = router;
