const Job = require('../models/job.model');

exports.createJob = async (req, res) => {
  try {
    const job = new Job(req.body);
    const savedJob = await job.save();
    res.status(201).json(savedJob);
  } catch (error) {
    res.status(500).json({ message: 'Error creating job', error });
  }
};

exports.getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find()
      .populate('machineId')
      .populate('technicianId')
      .populate('sparePartsList');
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching jobs', error });
  }
};

exports.getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id)
      .populate('machineId')
      .populate('technicianId')
      .populate('sparePartsList');
    if (!job) return res.status(404).json({ message: 'Job not found' });
    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching job', error });
  }
};

exports.updateJob = async (req, res) => {
  try {
    const job = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!job) return res.status(404).json({ message: 'Job not found' });
    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ message: 'Error updating job', error });
  }
};

exports.deleteJob = async (req, res) => {
  try {
    const job = await Job.findByIdAndDelete(req.params.id);
    if (!job) return res.status(404).json({ message: 'Job not found' });
    res.status(200).json({ message: 'Job deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting job', error });
  }
};
