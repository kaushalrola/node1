const { Int32 } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create movie schema & model
const MovieSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title field is required']
    },
    year: {
        year: String,
        required: [true, 'Year field is required']
    },
    rating: {
        type: Int32,
        deafult: 0
    }
});


const Movie = mongoose.model('movie',MovieSchema);

module.exports = Movie;