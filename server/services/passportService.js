const passport = require('passport');
const GoolgeStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

passport.use(new GoolgeStrategy({
    clientID : keys.googleClientID,
    clientSecret:keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, 
(accessToken, refreshToken, profile, done) => {
    console.log(accessToken);
    console.log(refreshToken);
    console.log(profile);
}
));