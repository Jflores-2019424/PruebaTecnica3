'use strict'

const express = require('express');
const app = express();
const {connection} = require("./src/database/connection");
require('dotenv').config;
const port = process.env.PORT;
const cors = require("cors");

const routesUser = require('./src/routes/user.routes')
const routesMovies = require('./src/routes/movies.routes')
const routesTickets = require('./src/routes/ticket.routes')
connection();

app.use(express.urlencoded({extended: false}));

app.use(express.json());
app.use(cors());

app.use('/api', routesUser, routesMovies, routesTickets);

app.listen(port, ()=> {
    console.log(`Servidor corriendo en el puerto ${port}`);
})