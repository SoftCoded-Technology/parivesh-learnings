const express = require('express');
const mongoose = require('mongoose');
const joi = require('joi');
const genres = require('./routes/genres');
const movies = require('./routes/movies');
const rentals = require('./routes/rentals');
const customers = require('./routes/customers');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

mongoose.connect('mongodb://localhost:27017/movieGenre-Project')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

app.get('/', (req, res) => {
    res.send("This is the lading point of the example project api for movies and genres");
})

app.use('/genres', genres);
app.use('/movies', movies);
// app.use('/rentals', rental);
app.use('/customers', customers);

app.listen(3000, () => console.log('Server running on port 3000...'))