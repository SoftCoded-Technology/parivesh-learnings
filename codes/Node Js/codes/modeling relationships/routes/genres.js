const {Genre, validateGenre} = require('../models/genre');
const express = require('express');
const router = express.Router();


router.get('/', async (req, res) => {
    const genres = await Genre.find().sort('name');
    res.send(genres);
})

router.post('/', async (req, res) => {

    const existingGenre = await Genre.findOne({name: req.body.name});
    if (existingGenre) return res.status(400).send('Genre already exists.');
    
    const {error} = validateGenre(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let genre = new Genre({
        name: req.body.name
    })
    genre = await genre.save();
    res.send(genre);
})


// exports.genres = router
module.exports = router