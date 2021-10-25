const User = require('../models/users');
const bcrypt = require('bcrypt');

module.exports.clientsHome = (req, res) => {
    console.log('-----------clients--------', req.user, req.body);
    res.render('clients', { user: req.user.firstName });
}


// module.exports.getAllConnections = (req, res) => {

// }