const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');

const Customers = new Schema({
    customer_name: {type:String, require: true},
    customer_email: {type:String, require: true},
    customer_password: {type:String, require: true},
    customer_phone: {type:String, require: true},
    customer_address: {type:String, require: true},
    customer_slug: {type: String, slug: 'customer_name', unique: true},
}, {
    timestamps: true
});

mongoose.plugin(slug);

module.exports = mongoose.model('Customers', Customers); 