const mongoose = require("mongoose");

const MenuSchema = new mongoose.Schema({
  item: {
    type: String,
    trim: true,
    required: [true, "Please add Item Name"],
  },
  description: {
    type: String,
    trim: true,
    
  },
  calories: {
    type: Number,
    trim: true,
    
  },
  price: {
    type: Number,
    trim: true,
    required: [true, "Please add Price"],
  },
  type: {
    type: String,
    trim: true,
  },
  category: {
    type: String,
    trim: true,
  },
  ingredients: {
    type: String,
    trim: true,
  },

  
});

module.exports = mongoose.model("Menu", MenuSchema);
