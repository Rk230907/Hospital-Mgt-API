const mongoose = require('mongoose');

// Path  to connect DB
mongoose.connect('mongodb://127.0.0.1:27017/Hospital-Api-development');

// Initiate the connection
const db = mongoose.connection;

// Check error in connection to DB
db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

// If success then
db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});


// Export this module
module.exports = db;