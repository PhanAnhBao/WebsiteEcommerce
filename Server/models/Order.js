const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const product = require('./Product');
const customer = require('./Customer');
const Order = new Schema({
    product_id: [{type: Schema.Types.ObjectId, ref: product}],
    customer_id: {type: Schema.Types.ObjectId, ref: customer},
    order_quantity: {type: Number},
    order_total: {type: Number},
}, {
    timestamps: true
});


module.exports = mongoose.model('Orders', Order); 