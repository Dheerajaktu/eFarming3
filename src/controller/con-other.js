// module.exports.clientsHome = (req, res) => {
//     res.render('clients', { user: req.user.firstName });
// }

module.exports.connectionsHome = (req, res) => {
    res.render('connections', { user: req.user.firstName });
}

module.exports.fertilizersHome = (req, res) => {
    res.render('fertilizers', { user: req.user.firstName });
}

module.exports.cropsHome = (req, res) => {
    res.render('crops', { user: req.user.firstName });
}

module.exports.marketHome = (req, res) => {
    res.render('market', { user: req.user.firstName });
}

module.exports.machinesHome = (req, res) => {
    res.render('machines', { user: req.user.firstName });
}

module.exports.landHome = (req, res) => {
    res.render('land', { user: req.user.firstName });
}

module.exports.bankLoanHome = (req, res) => {
    res.render('bankLoan', { user: req.user.firstName });
}

module.exports.govtSchemesHome = (req, res) => {
    res.render('govtSchemes', { user: req.user.firstName });
}

module.exports.customerCareHome = (req, res) => {
    res.render('customerCare', { user: req.user.firstName });
}