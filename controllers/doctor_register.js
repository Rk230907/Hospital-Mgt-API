const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const Doctor = require('../models/doctor');


module.exports.doctorReg = async function(req, res){
    try {
        const { username, password, name } = req.body;
    
        // Check if the username already exists
        const existingDoctor = await Doctor.findOne({ username });
        if (existingDoctor) {
          return res.status(409).json({ message: 'Username already exists' });
        }
    
        // Hash the password
        // const hashedPassword = await bcrypt.hash(password, 10);
    
        // Create a new doctor
        const doctor = new Doctor({
          name,
          username,
          password
        });
    
        // Save the doctor to the database
        await doctor.save();
    
        res.status(201).json({ message: 'Doctor registered successfully' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
      }
}