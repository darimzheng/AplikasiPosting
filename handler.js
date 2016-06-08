var moment = require('moment'),
	handler, 
	home;

home = function(req, res){
	res.render('home');
};

handler = {
	home: home
};

module.exports = handler;