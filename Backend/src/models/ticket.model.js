'use strict'

const mongoose = require("mongoose")
const Schema = mongoose.Schema

const TicketSchema = new Schema({
    movieId: {
        type: String,
        required: true,
    },
    seat: {
        type: String,
        required: true
    },
   date: {
        type: Date,
        required: true
    }
})

module.exports = mongoose.model('Ticket', TicketSchema)