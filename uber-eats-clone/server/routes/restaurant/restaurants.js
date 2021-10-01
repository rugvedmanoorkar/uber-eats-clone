const express = require('express')
const router = express.Router();
const {getRestaurantsInCity} = require('../../controllers/restaurant/restaurants.js')



router
.route('/restaurants')
.get(getRestaurantsInCity)

module.exports = router