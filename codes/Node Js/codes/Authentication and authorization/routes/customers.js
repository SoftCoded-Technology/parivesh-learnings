const express = require('express');
const router = express.Router();
const { Customers, validateCustomer } = require('../models/customer');


router.get('/', async (req, res) => {
    const customers = await Customers.find().sort('name');
    res.send(customers);
})


router.post('/', async (req, res) => {
    const existingCustomer = await Customers.findOne({ name: req.body.name });
    if (existingCustomer) return res.status(400).send('Customer already exists.');

    const { error } = validateCustomer(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let customer = new Customers({
        name: req.body.name,
        phone: req.body.phone,
        isGold: req.body.isGold
    })  

    customer = await customer.save();

    res.send(customer);

})


module.exports = router