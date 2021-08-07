var express = require('express');
const passport = require('passport');
var router = express.Router();
const controller = require('../controller/con-users');
require('../config/passport')(passport);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, post-check=0, pre-check=0');
    return next();
  }

  res.redirect('/login');
}


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Index', user: req.user });
});
router.get('/login', function (req, res) {
  res.render('login', { title: 'Login' });
});
router.get('/register', function (req, res) {
  res.render('register', { title: 'Register', success: '' });
});
router.post('/register', controller.newUserRegister);

/* Home page if user login success */
router.get('/home', isLoggedIn, function (req, res) {
  res.render('home', {
    user: req.user.firstName
  });
});
router.post('/login', (req, res, next) => {
  console.log('---login post called---', req.isAuthenticated());
  passport.authenticate('local', {
    failureRedirect: '/login',
    successRedirect: '/home',
    failureFlash: true
  })(req, res, next);
})
router.get('/logout', (req, res) => {
  req.logOut();
  res.redirect('/');
})

module.exports = router;
