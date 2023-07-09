const Report = require('../models/Report');
const Patient = require('../models/Patient');
const passport = require('../config/passport');



// Create Report controller
module.exports.createReport = async function (req, res) {
  try {
    const doctorId = req.body.doctorId; // Retrieve doctor ID from request body
    const patientId = req.params.id; // Retrieve patient ID from URL
    const { status } = req.body;

    // Create the report
    const report = await Report.create({
      doctor: doctorId,
      patient: patientId,
      status: status,
    });

    res.status(200).json({ report });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};


module.exports.getAllReports = async function (req, res) {
    try {
      const patientId = req.params.id;
  
      // Find the patient by ID
      const patient = await Patient.findById(patientId);
  
      if (!patient) {
        return res.status(404).json({ message: 'Patient not found' });
      }
  
      // Find all reports of the patient and sort them in ascending order of their dates
      const reports = await Report.find({ patient: patientId }).sort({ date: 1 });
  
      res.status(200).json({ reports });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };


  // List all reports of all patients filtered by status
  module.exports.getReportsByStatus = async function (req, res) {
    try {
      const status = req.params.status; // Corrected code to access the status parameter
  
      // Find all reports with the given status
      const reports = await Report.find({ status });
  
      res.status(200).json({ reports });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  

  