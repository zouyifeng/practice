var express = require("express");
var path = require("path");
var favicon = require("serve-favicon");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var template = require("art-template");

var routes = require("./routes/index");
var users = require("./routes/users");
var app = express();

app.set("views", path.join(__dirname, "views"));

template.config('base','');
template.config('extname','.html');

app.engine('.html', template.__express);
app.set('view engine', 'html');

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", routes);
app.use("/users", users);

app.use(function(req, res, next) {
	var err = new Error("Not Found");
	err.status = 404;
	next(err);
});

if(app.get("env") === "development") {
	app.use(function(err, req, res, next) {
		res.status (err.status || 500);
		res.render("error", {
			message: err.message,
			error: err
		});
	});
}

app.use(function(err, req, res, next) {
	res.status(err.status || 500);
	res.render("error", {
		message: err.message,
		error: {}
	});
});

module.exports = app;

app.listen(3000);

