function Authenticate(req, res, next) {
	console.log('Authentication......');
	next();
};

module.exports = Authenticate
