const express = require('express');
const home = express.Router();

home.get('/', (req, res) => {
	// res.send('Hello World!');
	res.render('index', 
		{ title: 'My express App', message: 'Hello From my express App' })
});

module.exports = home