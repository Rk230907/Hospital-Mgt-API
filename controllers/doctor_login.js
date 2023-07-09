// const jwt = require('jsonwebtoken');
// const passport = require('../config/passport');
// const Doctor = require('../models/doctor');
// const config = require('../config/JWT-config');

const jwt = require('jsonwebtoken');
const config = require('../config/JWT-config');
const Doctor = require('../models/doctor');
const Patient = require('../models/Patient');
const Report = require('../models/Report');

// Doctor login controller
module.exports.login = async function (req, res) {
  try {
    const { username, password } = req.body;

    // Find the doctor by username
    const doctor = await Doctor.findOne({ username });

    // If the doctor is not found or the password is incorrect
    if (!doctor || doctor.password !== password) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Assign doctor information to req.user
    req.user = {
      id: doctor._id,
      username: doctor.username,
      name: doctor.name,
    };

    // Generate a JWT
    const token = jwt.sign({ id: doctor._id }, config.jwtSecret, { expiresIn: config.jwtExpiration });

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
