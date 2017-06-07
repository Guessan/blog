var bcrypt = require("bcrypt-nodejs"),
	user = require("../models/userModel");

module.exports = function(user, callback){
	new user({
		username: user.name,
		password: bcrypt.hashSync(user, pass),
		admin: true,
		firstName: user.first,
		lastName: user.last,
		createdAT: new Date().toLocaleDateString()
	}).save(function(err){
		if(err){
			callback({
				"sucess": false,
				"reason": "Failed to save user"
			});
		} else {
			callback({
				"success": true,
				"reason": "Saved user"
			});
		}
	});
}