const mongoose = require("mongoose");

const RestaurantsSchema = new mongoose.Schema({
  restaurantName: {
    type: String,
    trim: true,
    required: [true, "Please add Name"],
  },
  address: {
    type: String,
    trim: true,
    required: [true, "Please add Address"],
  },
  city: {
    type: String,
    trim: true,
    required: [true, "Please add City"],
  },
  state: {
    type: String,
    trim: true,
    required: [true, "Please add Email ID"],
  },
  country: {
    type: String,
    trim: true,
  },
  firstName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
  },

  rating: {
    type: Number,
    trim: true,
  },
  deliveryFee: {
    type: Number,
    trim: true,
  },
  reviewCount: {
    type: Number,
    trim: true,
  },
  timings: {
    type: String,
    trim: true,
  },
  tags: {
    type: String,
    trim: true,
  },

  description: {
    type: String,
    trim: true,
  },
  contact: {
    type: Number,
    trim: true,
  },
  menu: {
    type: Object,
    trim: true
  }
});

module.exports = mongoose.model("Restaurant", RestaurantsSchema);
