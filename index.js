const  express = require('express');

const app = express();

const port = 8001;

const session = require('express-session');

const db = require('./config/mongoose');

const passport = require('./config/passport');

// Created a express session 
app.use(session({
  secret: 'aH1b31F8y6lvWUd057eQBDdUVOkvrEvU', 
  resave: false,
  saveUninitialized: false
}));

// Initialized the passport JWT
app.use(passport.initialize());
app.use(passport.session());


// Encode url so that you can read the form data
app.use(express.urlencoded());


// Use express static to run CSS in another file. .ie external CSS
app.use(express.static('./assets'));



// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');


// use express router
app.use('/', require('./routes'));


// Listen on port 8001
app.listen(port, function(err){
    if(err){
        console.log('Error in establishing connection to port 8001');
    }
    console.log('Server up and running on port 8001');
});

