const passport = require('passport');
const passportJWT = require('passport-jwt');
const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;
const config = require('./JWT-config');
const Doctor = require('../models/doctor');

// JWT options
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.jwtSecret,
};

// JWT strategy
const jwtStrategy = new JwtStrategy(jwtOptions, async (jwtPayload, done) => {
  try {
    const doctor = await Doctor.findById(jwtPayload.id);
    if (!doctor) {
      return done(null, false);
    }
    return done(null, doctor);
  } catch (error) {
    return done(error, false);
  }
});

// Serialize user
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Deserialize user
passport.deserializeUser(async (id, done) => {
  try {
    const doctor = await Doctor.findById(id);
    done(null, doctor);
  } catch (error) {
    done(error, null);
  }
});

// Check authentication middleware
passport.checkAuthentication = function (req, res, next) {
  // If the user is signed in, then pass on the request to the next function (controller's action)
  if (req.isAuthenticated()) {
    return next();
  }

  // If the user is not signed in, return an error or redirect to the login page
  return res.status(401).json({ message: 'Unauthorized' });
};

// Initialize Passport
passport.use(jwtStrategy);

module.exports = passport;
