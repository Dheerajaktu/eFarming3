const User = require('../models/users');
const bcrypt = require('bcrypt');

exports.newUserRegister = async (req, res) => {
    if (req.body.firstName && req.body.email && req.body.password && req.body.mobileNumber) {
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName || null,
            email: req.body.email || null,
            password: hashPassword || null,
            mobileNumber: req.body.mobileNumber,
            alternateMobileNumber: req.body.alternateMobileNumber || null,
            profilePicture: req.body.profilePicture || null,
            verifiedUser: req.body.verifiedUser,
            activeUser: req.body.activeUser,
            state: req.body.state || null,
            country: req.body.country || null,
            countryCode: req.body.countryCode || null,
            district: req.body.district || null,
            city: req.body.city || null,
            pinCode: req.body.pinCode || null,
            longitude: req.body.longitude || null,
            lattitude: req.body.lattitude || null,
            address: req.body.address || null,
            descriptionAboutUser: req.body.descriptionAboutUser || null
        })
        const user = await newUser.save();
        res.render('register', { success: 'You Registered Sucessfully', user: user })
    } else {
        res.json({ status: 'error', message: 'Error while Addming New User' })
    }
}

