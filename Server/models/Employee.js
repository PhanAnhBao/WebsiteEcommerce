const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');

const Employee = new Schema({
    admin_name: {type:String, require: true},
    admin_email: {type:String, require: true},
    admin_password: {type:String, require: true},
    admin_phone: {type:String, require: true},
    admin_address: {type:String, require: true},
    admin_slug: {type: String, slug: 'admin_name', unique: true},
}, {
    timestamps: true
});

mongoose.plugin(slug);

module.exports = mongoose.model('Employees', Employee); 