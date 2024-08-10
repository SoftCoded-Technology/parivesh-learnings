const { Movie, validateMovie } = require('../models/movie');
const { Genre } = require('../models/genre');
const express = require('express');
// const mongoose = require('mongoose');
const router = express.Router();


router.get('/', async (req, res) => {
    const movies = await Movie.find().sort('name');
    res.send(movies);
})

router.post('/', async (req, res) => {
    const existingMovie = await Movie.findOne({ title: req.body.title });
    if (existingMovie) return res.status(400).send('Movie already exists in db.');
    const { error } = validateMovie(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const genre = await Genre.findById(req.body.genreId);
    if (!genre) return res.status(404).send('The genre with the given ID was not found.');

    let movie = new Movie({
        title: req.body.title,
        price: req.body.price,
        genre: {
            _id: genre._id,
            name: genre.name
        },
        numberInStock: req.body.numberInStock,
        dailyRentalRate: req.body.dailyRentalRate
    })
    movie = await movie.save();
    res.send(movie);
})


// exports.movies = router
module.exports = router