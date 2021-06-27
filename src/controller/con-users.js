const models = require('../models');


exports.newUserRegister = (req, res) => {
    if (req.body.firstName && req.body.email && req.body.password && req.body.mobileNumber) {
        const data = {
            firstName: req.body.firstName,
            middleName: req.body.middleName || null,
            lastName: req.body.lastName || null,
            email: req.body.email || null,
            password: req.body.password || null,
            mobileNumber: req.body.mobileNumber,
            alternateMobileNumber: req.body.alternateMobileNumber || null,
            profilePicture: req.body.profilePicture || null,
            verifiedUser: req.body.verifiedUser ? 1 : 0,
            activeUser: req.body.activeUser ? 1 : 0,
            state: req.body.state || null,
            country: req.body.country || null,
            countryCode: req.body.countryCode || null,
            district: req.body.district || null,
            city: req.body.city || null,
            pinCode: req.body.pinCode || null,
            zipCode: req.body.zipCode || null,
            longitude: req.body.longitude || null,
            lattitude: req.body.lattitude || null,
            address: req.body.address || null,
            descriptionAboutUser: req.body.descriptionAboutUser || null

        }
        console.log('--controller req---', data);
        return models.users.create(data).then((response) => {
            // res.json({ status: 'success', data: response })
            res.render('register', { success: 'You Registered Sucessfully' })
        }).catch((error) => {
            res.json({ status: 'error', message: error })
        })

    } else {
        res.json({ status: 'error', message: 'Error while Addming New User' })
    }
}
