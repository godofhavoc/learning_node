var express = require('express');
var path = require('path');
var logger = require('morgan');
var http = require('http');

var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

var publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));

app.use(logger('short'));

app.get("/", function(request, response) {
    response.render("index", {
        message: "Hey everyone! This is my webpage."
    });
});

app.get("/about", function(request, response) {
    response.end("Welcome to the about page!");
});

app.get("/weather", function(request, response) {
    response.end("The current weather is NICE.");
});

app.get("/hello/:who", function(request, response) {
    response.end("Hello, " + request.params.who + ".");
});

app.use(function(request, response) {
    response.statusCode = 404;
    response.end("404!");
});

http.createServer(app).listen(3000);
