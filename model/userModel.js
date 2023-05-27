const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: String,
    image: String,
    tagline: String,
    description: String,
    moderator: String,
    category: String,
    sub_category: String,
  },
  { timestamps: true } // Add timestamps option
);

const userModel = mongoose.model("user", userSchema);

module.exports = { userModel };



