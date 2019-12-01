const passport = require('passport');
const router = require('express').Router();

router.get(
  '/google/get',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

router.get('/google/callback', passport.authenticate('google'), (req, res) => {
  res.redirect('/');
});

router.get('/current_user', (req, res) => {
  console.log(req);
  res.send(req.user);
});

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
