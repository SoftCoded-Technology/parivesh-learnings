const express = require('express');
const mongoose = require('mongoose');
const { customerSchema, validateCustomer } = require('./models');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/node-mongoose')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

    const Customer = mongoose.model('Customer', customerSchema);



app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/customers', async (req, res) => {
    const customers = await Customer.find().sort('name');
    res.send(customers);
});

app.post('/customers', async (req, res) => {
    const existingCustomer = await Customer.findOne({ name: req.body.name, phone: req.body.phone });
    if (existingCustomer) return res.status(400).send('Customer already exists');

    const { error } = validateCustomer(req.body);  // Validate req.body directly
    if (error) return res.status(400).send(error.details[0].message);

    let customer = new Customer({
        name: req.body.name,
        phone: req.body.phone,
        isGold: req.body.isGold
    });

    customer = await customer.save();
    res.send(customer);
});

app.delete('/customers/:id', async (req, res) => {
    const customer = await Customer.findByIdAndDelete(req.params.id);
    if (!customer) return res.status(404).send('Customer not found');
    res.send(customer);
});

app.listen(3000, () => console.log('Server running on port 3000...'));
