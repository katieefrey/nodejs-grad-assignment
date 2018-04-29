var express = require("express");
var path = require("path");
var url = require("url");
var astro = require('astronomia');
var nunjucks = require('nunjucks');

//step 1
//include the required route to sunrise.js here



var app = express();

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.use('/static', express.static(path.join(__dirname, 'static')));

app.get('/', (req,res, next)=>{
	res.render('index.html');
});

//step 2
//set up the application to use the above route
//when a user navigates to /sunrise



module.exports = app;