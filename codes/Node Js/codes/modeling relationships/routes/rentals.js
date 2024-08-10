const express = require('express');
const router = express.Router();
const { Rental, validateRental } = require('../models/rental');
const { Customers } = require('../models/customer');
const { Movie } = require('../models/movie');

router.get('/', (req, res) => {
    const rentals = Rental.find().sort('-dateOut');
    res.send(rentals);
})

router.post('/', async (req, res) => {
    const { error } = validateRental(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const customer = Customers.findById(req.body.customerId);
    if (!customer) return res.status(400).send('Invalid customer.');

    const movie = Movie.findById(req.body.movieId);
    if (!movie) return res.status(400).send('Invalid movie.');

    if (movie.numberInStock === 0) return res.status(400).send('Movie not in stock.');

    let rental = new Rental({
        customer: {
            _id: customer._id,
            name: customer.name,
            phone: customer.phone
        },
        movie: {
            _id: movie._id,
            title: movie.title,
            dailyRentalRate: movie.dailyRentalRate
        }
    });

    rental = await rental.save();

    movie.numberInStock--;
    movie.save();

    res.send(rental);
})

module.exports = router
