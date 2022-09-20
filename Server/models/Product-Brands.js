const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');

const Brands = new Schema({
    brand_name: {type:String, require: true},
    brand_slug: {type: String, slug: 'brand_name', unique: true},
}, {
    timestamps: true
});

mongoose.plugin(slug);

module.exports = mongoose.model('Brands', Brands); 