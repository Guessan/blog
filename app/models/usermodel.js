var mongoose = require("mongoose");

var user = new mongoose.Schema({
	username: String,
	password: String,
	admin: Boolean,
	firstName: String,
	lastName: String,
	createdAt: String
});

module.exports = mongoose.model("User", user);