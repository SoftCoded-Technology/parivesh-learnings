const mongoose = require('mongoose');
const Joi = require('joi');
const { genreSchema } = require('./genre');

const moviesSchema = new mongoose.Schema({
    title: { type: String, required: true, minlength: 5, maxlength: 50, trim: true },
    price: { type: Number, required: true, min: 100, max: 10000, trim: true },
    genre: { type: genreSchema, required: true },
    numberInStock: { type: Number, required: true, min: 1, max: 255 },
    dailyRentalRate: { type: Number, required: true, min: 1, max: 255 }
});

const Movie = mongoose.model('Movie', moviesSchema);


function validateMovie(movie) {
    const schema = Joi.object({
        title: Joi.string().min(5).max(50).required(),
        price: Joi.number().min(100).max(10000).required(),
        // genre: Joi.object({ 
        //     _id: Joi.string().required(),
        //     name: Joi.string().required().min(5).max(50)
        // }).required(),
        genreId: Joi.string().required(),
        numberInStock: Joi.number().min(1).max(255).required(),
        dailyRentalRate: Joi.number().min(1).max(255).required()
    });
    return schema.validate(movie);
}

module.exports = { Movie, validateMovie }