'use strict'

const mongoose = require("mongoose")
const Schema = mongoose.Schema

const TicketSchema = new Schema({
    movieId: {
        type: Schema.Types.ObjectId,
        ref: Movie,
        required: true,
    },
    seat: {
        type: String,
        required: true
    },
    functionId: {
        type: Schema.Types.ObjectId,
        ref: Show,
        required: true
    }
})

module.exports = mongoose.model('Ticket', TicketSchema)