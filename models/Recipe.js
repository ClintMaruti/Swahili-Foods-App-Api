const mongoose = require('mongoose');


const recipeSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    author: {
        type: String,
        required: true,
        trim: true
    },
    time: {
        type: String,
        required: true,
    },
    ingredients: {
        type: String,
        required: true
    },
    preparation: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Recipe', recipeSchema);
