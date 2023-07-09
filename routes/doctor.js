const express = require('express');

const router = express.Router();

const docRegController = require('../controllers/doctor_register');
const docloginController = require('../controllers/doctor_login');


router.post('/register', docRegController.doctorReg);

router.post('/login', docloginController.login);




module.exports = router;