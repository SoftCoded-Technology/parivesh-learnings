const express = require('express');
const router = express.Router();
const { User } = require('../models/user');
const _ = require('lodash');
const bcrypt = require('bcrypt');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const config = require('config');


router.get('/', async (req, res) => {
    const users = await User.find().sort('name');
    res.send(users);
})


router.post('/', async (req, res) => {
    const { error } = validateAuthUser(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let existingUser = await User.findOne({ email: req.body.email });
    // console.log(existingUser)
    // if (!existingUser) return res.status(400).send('Invalid email or password.');
    if (!existingUser) return res.status(400).send('no user found');    


    const validPassword = await bcrypt.compare(req.body.password, existingUser.password);
    // console.log('Password comparison result:', validPassword);
    if (!validPassword) return res.status(400).send('Invalid email or password.');

    const token = existingUser.generateAuthToken();
    // res.header('x-auth-token', token).send(_.pick(existingUser, ['_id', 'name', 'email']));
    res.send(token);

})


function validateAuthUser(req) {
    const schema = Joi.object({
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required()
    })
    return schema.validate(req)
}

module.exports = router