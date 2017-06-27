var express = require("express"),
	mongoose = require("mongoose"),
	bodyParser = require("body-parser"),
	passport = require("passport"),
	session = require("express-session"),
	path = require("path"),
	hbs = require("hbs"),
	routes = require("./app/routes/routes")
	methodOverride = require("method-override")
	auth = require("./app/auth/passport-local");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use("/static", express.static(path.join(__dirname, "app/client")));
app.use(session({
	secret: "itsASecret",
	resave: true,
	saveUninitialized: true
}));

app.use(methodOverride('_method'));

app.set("views", path.join(__dirname, "app/views"));
app.set("view engine", "hbs");
app.use(passport.initialize());
app.use(passport.session());

auth(passport);
routes(app, passport);

mongoose.connect("mongodb://localhost/blog");

app.listen(8080);
console.log("Server is running!");