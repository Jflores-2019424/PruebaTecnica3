'use strict'

const { Router } = require("express");
const { createMovie, listMovie, addFunction } = require("../controller/movies.controller")

const api = Router();

api.post('/create-movie', createMovie)

api.get('/list-movie', listMovie)

api.put('/add-show/:id', addFunction)

module.exports = api;