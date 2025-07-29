const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  machineId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Machine',
    required: true
  },
  technicianId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  states: {
    type: String,
    default: 'onProgress'
  },
  sparePartsList: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SparePart'
  }],
  quotation: {
    type: String
  },
  cost: {
    type: Number
  },
  completeCost: {
    type: Number
  },
  profit: {
    type: Number
  },
  progresses: [{
    type: String // or maybe a sub-document with date + description
  }],
  progressPercentage: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('Job', jobSchema);
