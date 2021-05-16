const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    username: { type: String, unique: true },
    password: String
});

const User = mongoose.model("User", userSchema, "Users");

module.exports = User;