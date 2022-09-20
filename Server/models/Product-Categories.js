const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const Categories = new Schema({
    category_name: {type:String, require: true},
    category_slug: {type: String, slug: 'category_name', unique: true},
}, {
    timestamps: true
});

mongoose.plugin(slug);

module.exports = mongoose.model('Categories', Categories); 