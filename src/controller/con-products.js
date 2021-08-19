const Products = require('../models/products');

module.exports.productsHome = (req, res) => {
    res.render('products', { user: req.user.firstName, user1: req.user });
}


/*-------------Adding New Product----------------------*/
module.exports.addProduct = async (req, res) => {
    console.log('------Add Product Controller called-------', req.body, req.params);
    if (req.body.productTitle && req.body.productPrice && req.body.productMOQ && req.body.productDescription && req.body.productVisibility && req.body.productTransportation) {
        try {
            const newProduct = new Products({
                pImage: req.body.productImage || null,
                pTitle: req.body.productTitle || null,
                pPrice: req.body.productPrice || null,
                pMOQ: req.body.productMOQ || null,
                pDescription: req.body.productDescription || null,
                pVisibility: req.body.productVisibility || null,
                pTransportation: req.body.productTransportation || null
            });

            const savedProduct = await newProduct.save();
            const response = {
                status: 200,
                message: 'success',
                product: savedProduct
            }
            res.send(response);

        } catch (err) {
            console.log('-------------con error---------', err);
            res.status(500).json({ message: 'error While Adding product' });
        }
    } else {
        res.status(401).json({ message: 'Please Fill Complete Product Details' });
    }

}