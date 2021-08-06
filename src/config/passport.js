const LocalStratagy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const User = require('../models/users');
const passport = require('passport');


module.exports = function (passport) {
    passport.use(new LocalStratagy({ usernameField: 'email' }, (email, password, done) => {
        User.findOne({ email: email }, (err, data) => {
            console.log('---user data---', data, err);
            if (err) throw err;
            if (!data) {
                return done(null, false, { message: "User doesn't exist! " });
            }
            bcrypt.compare(password, data.password, (err, match) => {
                if (err) return done(null, false);
                if (!match) return done(null, false, { message: "Bad Credentials! " });
                if (match) return done(null, data);
            })
        });
    }))


    passport.serializeUser((User, cb) => {
        cb(null, User._id);
    })
    passport.deserializeUser((_id, cb) => {
        User.findOne({ _id }, (err, User) => {
            cb(err, User);
        })
    })
}

