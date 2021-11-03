const Restaurant = require("../models/Restaurant");
const Menu = require("../models/Menu")
// @desc    Get all Restaurants
// @route   GET /api/v1/restaurants
// @access  Public
exports.getRestaurants = async (req, res, next) => {
  try {
    const restaurants = await Restaurant.find();

    return res.status(200).json({
      success: true,
      count: restaurants.length,
      data: restaurants,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// @desc    Add Restaurant
// @route   POST /api/v1/restaurants
// @access  Public
exports.addRestaurant = async (req, res, next) => {
  try {
    console.log(req.body);

    const restaurant = await Restaurant.create(req.body);

    return res.status(201).json({
      success: true,
      data: restaurant,
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((val) => val.message);

      return res.status(400).json({
        success: false,
        error: messages,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: "Server Error",
      });
    }
  }
};

// @desc    Delete restaurant
// @route   DELETE /api/v1/restaurants/:id
// @access  Public
exports.deleteRestaurant = async (req, res, next) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);

    if (!restaurant) {
      return res.status(404).json({
        success: false,
        error: "No restaurant found",
      });
    }

    await restaurant.remove();

    return res.status(200).json({
      success: true,
      data: {},
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// @desc    Add Restaurant Menu
// @route   POST /api/v1/restaurant/:id/menu
// @access  Public
exports.addMenuItem = async (req, res, next) => {
  try {

    
    const restaurant = await Restaurant.findById(req.params.id);
    const menu = await Menu.create(req.body);
    const body = req.body
    console.log({body});
    const temp = await Restaurant.findByIdAndUpdate(req.params.id,{$push :{
      menu : body
    }})

    return res.status(201).json({
      success: true,
      data: restaurant,
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((val) => val.message);

      return res.status(400).json({
        success: false,
        error: messages,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: "Server Error",
      });
    }
  }
};


// @desc    Get Restaurant Menu
// @route   GET /api/v1/restaurant/:id/menu
// @access  Public
exports.getMenu = async (req, res, next) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    const menu = restaurant.menu
    return res.status(200).json({
      success: true,
      count: menu.length,
      data: menu,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};