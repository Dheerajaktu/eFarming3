var express = require('express');
var router = express.Router();
const controller = require('../controller/con-users');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Index' });
});

router.get('/login', function (req, res, next) {
  res.render('login', { title: 'Login' });
});

router.get('/register', function (req, res) {
  res.render('register', { title: 'Register' });
});
router.post('/register', controller.newUserRegister);

module.exports = router;
