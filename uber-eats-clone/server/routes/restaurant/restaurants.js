const express = require('express')
const router = express.Router();
const {getRestaurantsInCity, getRestaurantMenu} = require('../../controllers/restaurant/restaurants.js')



router
.route('/restaurants')
.get(getRestaurantsInCity)


router
.route('/restaurants/:id')
.get(getRestaurantMenu)

module.exports = router