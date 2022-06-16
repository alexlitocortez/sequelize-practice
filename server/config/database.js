const Sequelize = require('sequelize');

const sequelize = new Sequelize(`postgres://testOne:@127.0.0.1:50029/sequelize-practice`, {
	logging: false
})

module.exports = sequelize;



