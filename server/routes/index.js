const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();

router.get('/', (req, res) => res.send('This is root!'))

router.post('/users', controllers.createUser)
//users route forwards request to createUser controller

router.get('/users', controllers.getAllUsers)
//this route forwards request to get all user information

router.get('/users/:id', controllers.getUserById)
//route that retrieves user IDs

module.exports = router;


