const express = require('express');
const router = express.Router();
const { signup, login } = require('../controllers/auth.controller');
const { authenticate, authorizeRoles } = require('../middleware/auth.middleware');

router.post('/signup', signup);
router.post('/login', login);

// Example protected route
router.get('/admin', authenticate, authorizeRoles('admin'), (req, res) => {
  res.json({ message: 'Welcome Admin!' });
});

module.exports = router;
