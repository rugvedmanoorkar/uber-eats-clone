const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
  fullname: {
    type: String,
    trim: true,
    required: [true, "Please add Full Name"],
  },
  username: {
    type: String,
    trim: true,
    required: [true, "Please add User Name"],
  },
  password: {
    type: String,
    trim: true,
    required: [true, "Please add Password"],
  },
  email: {
    type: String,
    trim: true,
    required: [true, "Please add Email ID"],
  },
  dateOfBirth: {
    type: String,
    trim: true,
  },
  street: {
    type: String,
    trim: true,
  },
  city: {
    type: String,
    trim: true,
  },

  state: {
    type: String,
    trim: true,
  },
  country: {
    type: String,
    trim: true,
  },
  pin: {
    type: Number,
    trim: true,
  },
  about: {
    type: String,
    trim: true,
  },
  nickName: {
    type: String,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", UsersSchema);
