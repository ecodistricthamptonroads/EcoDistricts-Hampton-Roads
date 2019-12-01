const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');

const keys = require('../keys');
const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => done(null, user));
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      userProfileURL: 'https://www.googleapis.com/oauth2/v3/userinfo',
      callbackURL: '/api/auth/google/callback',
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });
      if (existingUser) {
        return done(null, existingUser); // error = null
      }
      const user = await new User({
        googleId: profile.id,
        name: profile.displayName
      }).save();
      return done(null, user); // error = null
    }
  )
);
