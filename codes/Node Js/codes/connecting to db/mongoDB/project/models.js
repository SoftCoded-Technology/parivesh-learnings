const mongoose = require('mongoose');
const Joi = require('joi');

const customerSchema = new mongoose.Schema({
    isGold: { type: Boolean, default: false },
    name: { type: String, required: true, minlength: 5, maxlength: 50 },
    phone: { type: String, required: true, minlength: 10, maxlength: 13 }
});

function validateCustomer(customer) {
    const schema = Joi.object({
        name: Joi.string().min(5).max(50).required(),
        phone: Joi.string().min(10).max(13).required(),
        isGold: Joi.boolean()
    });

    return schema.validate(customer);
}

exports.customerSchema = customerSchema;
exports.validateCustomer = validateCustomer
// exports.Customer = mongoose.model('Customer', customerSchema);