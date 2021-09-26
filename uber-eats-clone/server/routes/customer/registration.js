const express = require('express')
const router = express.Router();
var bodyParser = require('body-parser')
const {getUser, deleteUser, addUser} = require('../../controllers/customer/registration')



router
.route('/customer/signup/')
.get(getUser)
.post(addUser)


router
.route('/:username')
.delete(deleteUser)

module.exports = router