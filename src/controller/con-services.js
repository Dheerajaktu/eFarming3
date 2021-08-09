module.exports.servicesHome = (req, res) => {
    res.render('services', { user: req.user.firstName });
}


