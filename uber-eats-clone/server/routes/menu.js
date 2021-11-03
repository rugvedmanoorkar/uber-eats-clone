const express = require("express");
const router = express.Router();
const { addMenuItem, getMenu } = require("../controllers/Restaurants");

router.route("/:id/menu").post(addMenuItem).get(getMenu);

//router.route("/:id").delete(deleteRestaurant);

module.exports = router;
