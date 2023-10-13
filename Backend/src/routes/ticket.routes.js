'use strict'

const { Router } = require("express");
const { createTicket, listTicket, deleteTicket } = require("../controller/ticket.controller")

const api = Router();

api.post("/create-ticket", createTicket)

api.get("/list-ticket", listTicket)

api.delete("/delete-ticket/:id", deleteTicket)