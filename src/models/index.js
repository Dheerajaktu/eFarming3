const Sequelize = require('sequelize');
require('dotenv').config();
const sequelize = new Sequelize(process.env.DB, 'SA', process.env.PASSWORD, {
    host: 'localhost',
    dialect: 'mssql',
    port: '1433',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }

})

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.users = require('./user')(sequelize, Sequelize);
// console.log('---models---', db);
module.exports = db;
