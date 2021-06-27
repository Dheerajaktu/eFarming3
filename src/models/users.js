'use stict'
module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('users', {

        userID: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            field: `userID`
        },
        firstName: {
            type: Sequelize.STRING,
            allowNull: false,
            field: `firstName`
        },
        middleName: {
            type: Sequelize.STRING,
            allowNull: true,
            field: `middleName`
        },
        lastName: {
            type: Sequelize.STRING,
            allowNull: true,
            field: `lastName`
        },
        email: {
            type: Sequelize.STRING,
            allowNull: true,
            field: `email`
        },
        password: {
            type: Sequelize.STRING,
            allowNull: true,
            field: `password`
        },
        mobileNumber: {
            type: Sequelize.STRING,
            allowNull: false,
            field: `mobileNumber`
        },
        alternateMobileNumber: {
            type: Sequelize.STRING,
            allowNull: true,
            field: `alternateMobileNumber`
        },
        profilePicture: {
            type: Sequelize.STRING,
            allowNull: true,
            field: `profilePicture`
        },
        verifiedUser: {
            type: Sequelize.INTEGER,
            allowNull: true,
            field: `verifiedUser`,
        },
        activeUser: {
            type: Sequelize.INTEGER,
            allowNull: true,
            field: `activeUser`,
        },
        state: {
            type: Sequelize.STRING,
            allowNull: true,
            field: `state`
        },
        country: {
            type: Sequelize.STRING,
            allowNull: true,
            field: `country`
        },
        countryCode: {
            type: Sequelize.STRING,
            allowNull: true,
            field: `countryCode`
        },
        district: {
            type: Sequelize.STRING,
            allowNull: true,
            field: `district`
        },
        city: {
            type: Sequelize.STRING,
            allowNull: true,
            field: `city`
        },
        pinCode: {
            type: Sequelize.STRING,
            allowNull: true,
            field: `pinCode`
        },
        zipCode: {
            type: Sequelize.STRING,
            allowNull: true,
            field: `zipCode`
        },
        longitude: {
            type: Sequelize.STRING,
            allowNull: true,
            field: `longitude`
        },
        lattitude: {
            type: Sequelize.STRING,
            allowNull: true,
            field: `lattitude`
        },
        address: {
            type: Sequelize.STRING,
            allowNull: true,
            field: `address`
        },
        descriptionAboutUser: {
            type: Sequelize.STRING,
            allowNull: true,
            field: `descriptionAboutUser`
        },
    },
        {
            timestamps: false
        });

    return User;

}