const express = require('express');
const passport = require('passport');
const router = express.Router();
const controller = require('../controller/con-users');
const products = require('../controller/con-products');
const services = require('../controller/con-services');
const other = require('../controller/con-other');
require('../config/passport')(passport);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, post-check=0, pre-check=0');
    return next();
  }
  res.redirect('/login');
}



/* ------------------GET Index page-------------------*/
router.get('/', (req, res) => {
  if (req.user) {
    res.render('index', { title: 'Index', user: req.user.firstName });
  } else {
    res.render('index', { title: 'Index', user: '' });
  }
});


/*-------------con-user------------------------*/
router.get('/login', controller.loginPage);
router.get('/register', controller.registerPage);
router.post('/register', controller.newUserRegister);
router.get('/home', isLoggedIn, controller.onloginSuccess);
router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    failureRedirect: '/login',
    successRedirect: '/home',
    failureFlash: true
  })(req, res, next);
})


/*------------------User Profile-----------------*/
router.get('/profile', isLoggedIn, controller.userProfile);
router.post('/updateProfile/:id', isLoggedIn, controller.updateUserProfile);


/*------------------(con-products.js)-----------------*/
router.get('/products', isLoggedIn, products.productsHome);
router.post('/addNewProduct', isLoggedIn, products.addProduct);



/*------------------(con-services.js)-----------------*/
router.get('/services', isLoggedIn, services.servicesHome);


/*------------------(con-other.js)-----------------*/
router.get('/clients', isLoggedIn, other.clientsHome);
router.get('/connections', isLoggedIn, other.connectionsHome);
router.get('/fertilizers', isLoggedIn, other.fertilizersHome);
router.get('/crops', isLoggedIn, other.cropsHome);
router.get('/market', isLoggedIn, other.marketHome);
router.get('/machines', isLoggedIn, other.machinesHome);
router.get('/land', isLoggedIn, other.landHome);
router.get('/bank-loan', isLoggedIn, other.bankLoanHome);
router.get('/govt-schemes', isLoggedIn, other.govtSchemesHome);
router.get('/customare-care', isLoggedIn, other.customerCareHome);



/*--------------user Logout--------------------*/
router.get('/logout', (req, res) => {
  req.logOut();
  res.redirect('/');
})


module.exports = router;
