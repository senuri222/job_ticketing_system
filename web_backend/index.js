const express = require('express');
const admin = require('firebase-admin');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const userRoutes = require('./routes/user.routes');
const authRoutes = require('./routes/auth.routes');
const sparepartRoutes = require('./routes/spareparts.routes');
const serviceAccount = require('./firebase-service-account.json'); // Load service account key
const machineSubmitRoutes = require('./routes/machineSubmit.routes');
const privilegeRoutes = require('./routes/privileges.routes');
const jobRoutes = require('./routes/job.routes');

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
app.use(cors({
  origin: 'http://localhost:4200'
}));
app.use(express.json());



// Pass DB to routes
app.use((req, res, next) => {
  req.db = db;
  next();
});

// Routes
app.use('/api/auth', authRoutes);

// Start Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

//register user crud routes
app.use('/api/users', userRoutes);

//register sparepart crud routes
app.use('/api/sparepart', sparepartRoutes);

//register privileges crud routes
app.use('/api/privileges', privilegeRoutes);

//register machine submit crud routes
app.use('/api/machineSubmit', machineSubmitRoutes);

//register job  crud routes
app.use('/api/job', jobRoutes);