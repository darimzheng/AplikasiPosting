var router = require('./router'),
	nunjucks = require('nunjucks'),
	express = require('express'),
	path = require('path'),
	middleware;

middleware = function(app){
	router(app);
	nunjucks.configure('templates',{
		autoescape: true,
		express: app
	});
	app.set('view engine', 'html');
    app.use(express.static(path.join(__dirname, 'public')));
};

module.exports = middleware;