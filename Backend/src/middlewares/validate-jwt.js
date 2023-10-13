const { request, response } = require("express");
const jwt = require("jsonwebtoken");
const moment = require("moment");
const User = require("../models/user.model");

const validateJWT = async (req = request, res = response, next) => {
    const token = req.header("x-token");
    
    if (!token) return res.status(404).json({ message: "No hay token en la petición" });

    try {
        const payload = jwt.decode(token, process.env.SECRET_KEY);
        const userFound = await User.findById(payload.uId);
        console.log(userFound);

        if(payload.exp <= moment().unix()) return res.status(500).json({message: "El token ha expirado"});

        if(!userFound) return res.status(404).json({message: "El token no es valido - Usuario no existe en DB"});

        req.user = userFound;

        next();
    } catch (error) {
        console.log(error);
        res.status(404).json({
            ok: false,
            message: "Error al comprobar el token",
            error: error
        })
    }
}

module.exports = {validateJWT}