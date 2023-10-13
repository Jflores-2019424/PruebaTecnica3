'use strict'

const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const showSchema = new Schema({
    dateTime: {
        type: Date,
        required: true
    },
    movie: {
        type: Schema.Types.ObjectId,
        ref: Movie
    }
})

module.exports =  mongoose.model("Show", showSchema)