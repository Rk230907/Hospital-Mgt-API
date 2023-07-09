const express = require('express');

const router = express.Router();

const patient = require('../controllers/patient_register');
const report = require('../controllers/create_report');


router.post('/register', patient.registerPatient);

router.post('/:id/create_report', report.createReport);

// router.post('/:id/create_report', report.createReport);

router.get('/:id/all_reports', report.getAllReports);

router.get('/:status', report.getReportsByStatus);







module.exports = router;