function Logger(req, res, next) {
	console.log('logging......');
	next();
};

module.exports = Logger