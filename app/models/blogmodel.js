var mongoose = require("mongoose");
var blogpost = new mongoose.Schema({
	title: String,
	post: String,
	date: {
		month: String,
		day: String,
		year: String
	},
	comments: [{
		comment: String,
		user: String
	}]
});

module.exports = mongoose.model("posts", blogpost);