const {Genre, validateGenre} = require('../models/genre');
const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware')
const isAdmin = require('../middleware/adminMiddleware')


router.get('/', async (req, res) => {
    const genres = await Genre.find().sort('name');
    res.send(genres);
})

router.post('/',auth, async (req, res) => {

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

router.get('/:id', async (req, res) => {
    const genre = await Genre.findById(req.params.id);
    if (!genre) return res.status(404).send('The genre with the given ID was not found.');
    res.send(genre);
})

router.delete('/:id',[auth,isAdmin], async (req, res) => {
    const genre = await Genre.findByIdAndRemove(req.params.id);
    if (!genre) return res.status(404).send('The genre with the given ID was not found.');
    res.send(genre);
})


// exports.genres = router
module.exports = router