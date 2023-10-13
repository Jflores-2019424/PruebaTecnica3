'use strict'

const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const createUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (user) return res.status(500).json({ message: "Un usuario ya esta registrado con este email", ok: false, user: user });
        user = new User(req.body);

        const saltos = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(password, saltos);

        user = await user.save();

        return res.status(200).json({ message: `El usuario ${user.name} ha sido creado correctamente`, user});
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Hubo un error en la creación del usuario", });
    }
}

const loginUser = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(401).json({ error: 'Credenciales inválidas' });
      }
  
      const isPasswordValid = await bcrypt.compare(password, user.password);
  
      if (!isPasswordValid) {
        return res.status(401).json({ error: 'Credenciales inválidas' });
      }

      const token = jwt.sign({ userId: user._id }, 'mi_secreto', {
        expiresIn: '10h',
      });

      user.token = token;
      await user.save();
  
      res.json({
        message: "Usuario autenticado correctamente",
        token,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Error al realizar el login' });
    }
  };


module.exports = {
    createUser,
    loginUser
}