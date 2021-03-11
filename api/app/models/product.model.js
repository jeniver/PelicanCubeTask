const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: String,
    brand: String,
    modal: String,
    pId: String,
    discription: String,
    buyingPrice: Number,
    sellingPrice: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('Product', ProductSchema);