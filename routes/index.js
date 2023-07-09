const express = require('express');

const router = express.Router();

// Controller to render the home logic
const homeController = require('../controllers/home_controller');

// Get the homecontroller logic from controller
router.get('/', homeController.home);
router.use('/doctors', require('./doctor'));

router.use('/patients', require('./patient'));

router.use('/reports', require('./patient'));





module.exports = router;