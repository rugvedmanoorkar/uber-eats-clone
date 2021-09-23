const express = require('express')
const router = express.Router();
var bodyParser = require('body-parser')
const {getUser, deleteUser, addUser} = require('../controllers/registration')
var jsonParser = bodyParser.json()

router
.route('/')
.get(getUser)
.post(addUser,jsonParser)


router
.route('/:username')
.delete(deleteUser)

module.exports = router