'use strict'

const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const MoviesSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        data: Buffer,
        type: String,
        required: true
    },
    clasification: {
        type: String,
        required: true
    },
    functions: [{
        date: {
            type: Date,
            required: true
        }
    }]
    
})

module.exports =  mongoose.model('Movie', MoviesSchema)