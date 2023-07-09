const Patient = require('../models/Patient');

// Handle patient registration
module.exports.registerPatient = async function(req, res) {
  try {
    const { name, phoneNumber } = req.body;

    // Check if the patient already exists
    let patient = await Patient.findOne({ phoneNumber });

    // If the patient already exists, return the patient info
    if (patient) {
      return res.status(200).json({ patient });
    }

    // Create a new patient
    patient = await Patient.create({ name, phoneNumber });

    res.status(201).json({ patient });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
