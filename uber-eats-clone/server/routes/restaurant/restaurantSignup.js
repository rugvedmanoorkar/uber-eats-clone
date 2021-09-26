const express = require('express')
const router = express.Router();
var bodyParser = require('body-parser')
const {addRestaurant, getRestaurant, deleteRestaurant} = require('../../controllers/restaurant/restaurantSignup')



router
.route('/restaurant/signup/')
.get(getRestaurant)
.post(addRestaurant)


router
.route('/:username')
.delete(deleteRestaurant)

module.exports = router