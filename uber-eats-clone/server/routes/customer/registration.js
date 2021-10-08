const express = require('express')
const router = express.Router();
var bodyParser = require('body-parser')
const {getUser, deleteUser, addUser} = require('../../controllers/customer/registration')



router
.route('/customer/login/')
.get(getUser)
.post(addUser)
.delete(deleteUser)


router
.route('/:username')
.delete(deleteUser)

module.exports = router