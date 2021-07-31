const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        max: 25
    },
    lastName: {
        type: String,
        required: false,
        max: 40
    },
    email: {
        type: String,
        required: true,
        unique: true,
        max: 60
    },
    password: {
        type: String,
        require: true,
        min: 5,
        max: 16
    },
    mobileNumber: {
        type: String,
        required: true,
        unique: true,
        max: 12
    },
    alternateMobileNumber: {
        type: String,
        require: false,
        max: 12
    },
    profilePicture: {
        type: String,
        default: ''
    },
    verifiedUser: {
        type: Boolean,
        default: false
    },
    activeUser: {
        type: Boolean,
        default: false
    },
    state: {
        type: String,
        required: false
    },
    country: {
        type: String,
        required: false
    },
    countryCode: {
        type: String,
        required: false,
        max: 6
    },
    district: {
        type: String,
        required: false,
        max: 40
    },
    city: {
        type: String,
        required: false,
        max: 40
    },
    pinCode: {
        type: String,
        required: false,
        max: 8
    },
    longitude: {
        type: Object,
        required: false
    },
    lattitude: {
        type: Object,
        required: false
    },
    address: {
        type: String,
        required: false,
        max: 150
    },
    descriptionAboutUser: {
        type: String,
        required: false,
        max: 400

    }
}, { timestamps: true })

module.exports = mongoose.model('User', userSchema);



