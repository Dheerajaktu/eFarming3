const mongoose = require('mongoose');

const User = require('./users');

const productsSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
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
    productDescription: {
        type: String,
        required: false,
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



