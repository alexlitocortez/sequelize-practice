const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('sequelize-practice', 'postgres', 'password', {
    dialect: 'postgres',
    host: 'localhost',
});

module.exports = sequelize;