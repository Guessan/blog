var r = require("./routes.json");
var controllers = {
	pages: require("./controllers/pages"),
	session: require("./controllers/session"),
	blogCtrl: require("./controllers/blogcontrol")
};
module.exports = function (app, passport){
	app.get(r.index, controllers.session, controllers.pages.index)
	app.get(r.create, controllers.session, controllers.blogCtrl.createPage)
	app.get(r.update, controllers.session, controllers.blogCtrl.updatePage)
	//app.get(r.delete, controllers.pages.delete)
	app.get(r.home, controllers.pages.home)
	app.post(r.signup, controllers.pages.signup)
	app.get(r.post, controllers.session, controllers.pages.post)
	app.get(r.login, controllers.pages.login)
	app.post(r.login, passport.authenticate("local-login", {
		successRedirect: r.index,
		failureRedirect: r.login
	}));

	app.post(r.create, controllers.session, controllers.blogCtrl.create);
	app.put(r.update, controllers.session, controllers.blogCtrl.update);
	app.delete(r.delete, controllers.session, controllers.blogCtrl.delete);
};