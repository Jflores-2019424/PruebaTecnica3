'use strict'

const { Router } = require("express");
const { check } = require("express-validator")
const { createUser, loginUser } = require("../controller/user.controller");
const { validateParams } = require("../middlewares/validate-params");

const api = Router();

api.post('/create-user', [
    check('name', 'El parametro name es necesario para la creación del usuario').not().isEmpty(),
    check('email', 'El parametro email es necesario para la creación del usuario').not().isEmpty(),
    check('password', 'El parametro password debe contar con 8 o más caracteres').isLength({min: 8}),
    validateParams
], createUser);

api.post('/login', loginUser);

module.exports = api;