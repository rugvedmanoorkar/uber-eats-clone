const Menu = require("../models/Menu");



// @desc    Add Menu
// @route   POST /api/v1/Menus
// @access  Public
exports.addMenu = async (req, res, next) => {
    try {
      console.log(req.body);
  
      const Menu = await Menu.create(req.body);
  
      return res.status(201).json({
        success: true,
        data: Menu,
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