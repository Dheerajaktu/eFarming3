const Products = require('../models/products');
const mongoose = require('mongoose');
const fs = require('fs');

module.exports.indexPage = async (req, res) => {

    await Products.find({}, (err, data) => {
        if (err) throw err;
        if (req.user) {
            res.render('index', { title: 'Index', user: req.user.firstName, products: data });

        } else {
            res.render('index', { title: 'Index', user: '', products: data });
        }
    })

}


module.exports.productsHome = async (req, res) => {
    const userID = req.user._id;
    await Products.find({ userId: mongoose.Types.ObjectId(`${userID}`) }, (err, data) => {
        if (err) {
            res.status(500).json({ message: 'error While fetching product' });
        } else {
            res.render('products', { user: req.user.firstName, user1: req.user, products: data });

        }
    })
}


/*-------------Adding New Product----------------------*/
module.exports.addProduct = async (req, res) => {

    if (req.file.filename && req.body.productTitle && req.body.productPrice && req.body.productMOQ && req.body.productVisibility && req.body.productTransportation) {
        try {

            const newProduct = new Products({
                userId: req.user._id,
                productTitle: req.body.productTitle,
                productPrice: req.body.productPrice,
                productMOQ: req.body.productMOQ,
                productDescription: req.body.productDescription,
                productVisibility: req.body.productVisibility,
                productTransportation: req.body.productTransportation,
                productImage: req.file.filename,
            });
            const savedProduct = await newProduct.save();
            if (savedProduct) {
                res.redirect('/products');
            } else {
                res.status(500).json({ message: 'error While Adding product' });
            }
        } catch (err) {
            res.status(500).json({ message: 'error While Adding product' });
        }
    } else {
        res.status(401).json({ message: 'Please Fill Complete Product Details' });
    }

}

/*------------------Delete Product--------------------------*/
module.exports.productDeleteByUser = (req, res) => {
    const productID = req.params.id;
    const ID = productID.trim();
    if (req.user) {
        try {
            Products.findByIdAndRemove({ _id: ID }, (err, response) => {
                if (err) {
                    throw err;
                }
                const result = {
                    status: '200',
                    message: 'Success',
                    result: response
                }
                res.send(result);
            });
        } catch (err) {
            res.status(500).json({ message: 'error While Adding product' });
        }
    }
}