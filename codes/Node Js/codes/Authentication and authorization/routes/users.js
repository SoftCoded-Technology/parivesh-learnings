const express = require('express');
const router = express.Router();
const { User,validateUser } = require('../models/user');
const _ = require('lodash');
const bcrypt = require('bcrypt');
// const config = require('config');
// const jwt = require('jsonwebtoken');
const auth = require('../middleware/authMiddleware');


router.get('/', async (req, res) => {
    const users = await User.find().sort('name');
    res.send(users);
})

router.get('/me',auth, async (req, res) => {
    const user = await User.findById(req.user._id).select('-password');
    res.send(user);
})

router.post('/', async (req, res) => {
    const { error } = validateUser(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) return res.status(400).send('User already exists.');

    let user = new User(_.pick(req.body, ['name', 'email', 'password', 'isAdmin']));
    
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    // const token = jwt.sign({ _id: user._id }, config.get('jwtPrivateKey'));
    const token = user.generateAuthToken();
    
    res.header('x-auth-token', token).send(_.pick(user, ['_id', 'name', 'email', 'isAdmin']));
    user = await user.save();
    // res.send(_.pick(user, ['_id', 'name', 'email']));

})

module.exports = router 