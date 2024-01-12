const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({

    title: String, // String is shorthand for {type: String}
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        min: [0, 'Worng Price'],
        required: true
    },
    discountPercentage: {
        type: String,
        required: true,
        min: [0, 'Worng Min Discount'],
        max: [50, 'Worng Max Discount'],
    },
    rating: {
        type: String,
        required: true,
        min: [0, 'Worng Min Rating'],
        max: [5, 'Worng Max Rating'],
    },
    brand: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    images: {
        type: [String],
        required: true
    },
});

exports.Product = mongoose.model('Product', productSchema);