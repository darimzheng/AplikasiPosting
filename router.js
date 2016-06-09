var express = require('express'),
	r = express.Router(),
	home = require('./controller/home'),
	history = require('./controller/history'),
	router;

router = function(app){
	r.get('/', home);
	r.get('/history/:id', history);
	r.get('/info/:id');
	app.use(r);
};
module.exports = router;