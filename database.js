const Sequelize = require('sequelize');

const sequelize = new Sequelize('sequelize-practice', 'root', '', {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = sequelize