const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
    productTitle: {
        type: String,
        max: 100,
        required: true
    },
    productImage: {
        type: String,
        required: false
    },
    productPrice: {
        type: String,
        requied: true
    },
    productMOQ: {
        type: String,
        requied: true
    },
    productDesciption: {
        type: String,
        required: true,
        max: 3000
    },
    productVisibility: {
        type: String,
        requied: true
    },
    productTransport: {
        type: String,
        requied: true
    },
}, { timestamps: true })

module.exports = mongoose.model('products', productsSchema);



