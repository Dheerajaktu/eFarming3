module.exports.productsHome = (req, res) => {
    res.render('products', { user: req.user.firstName, user1: req.user });
}