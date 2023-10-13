'use strict'

const Ticket = require("../models/ticket.model")

const createTicket = async(req, res) =>{
    const { seat } = req.body
    try{
        let ticket = await Ticket.findOne({seat})
        if(ticket) return res.status(500).json({message: "Seat already in use", ok: false, ticket: ticket})
        ticket = new Ticket(req.body)

        ticket = await ticket.save()

        return res.status(200).json({message: `Seat ${seat} reserved`})
    }catch(err){
        console.log(err)
    }
}

const listTicket = async(req, res) =>{
    try{
        const ticket = await Ticket.find()
        if(!ticket){
            return res.status(400).json({message: "No tickets buyed"})
        }else{
            return res.status(200).json({message: "Your tickets", ticket})
        }
    }catch(err){
        console.log(err)
    }
}

const deleteTicket = async(req, res) =>{
    try{
        const id = req.params.id
        const deleteTicket = await Ticket.findByIdAndDelete(id)
        return res.status(200).send({
            message: "Reservation canceled correctly",
            deleteTicket
        })
    }catch(err){
        console.log(err)
    }
}

module.exports = {
    createTicket,
    listTicket,
    deleteTicket
}