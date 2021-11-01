const express = require("express");
const router = express.Router();
const { getRestaurants, addRestaurant, deleteRestaurant } = require("../controllers/Restaurants");

router.route("/").get(getRestaurants).post(addRestaurant);

router.route("/:id").delete(deleteRestaurant);

module.exports = router;
