const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { jwt_secret } = require("../config/keys");

const UserController = {
  async register(req, res) {
    try {
      const user = await User.create(req.body);
      res.status(201).send({ msg: "Usuario registrado con éxito", user });
    } catch (error) {
      console.error(error);
    }
  },

  async login(req, res) {
    try {
      const user = await User.findOne({
        email: req.body.email,
      });
      const token = jwt.sign({ _id: user._id }, jwt_secret);
      if (user.tokens.length > 4) user.tokens.shift;
      user.tokens.push(token);
      await user.save();
      res.send({ msg: "Bienvenido" + user.name, token });
    } catch (error) {
      console.error(error);
    }
  },

  async logout(req, res) {
    try {
      await User.findByIdAndUpdate(req.user._id, {
        $pull: { tokens: req.headers.authorization },
      });
      res.send({ msg: "Desconectado con éxito" });
    } catch (error) {
      console.error(eror);
      res
        .status(500)
        .send({ msg: "Hubo un problema al intentar desconectar el usuario" });
    }
  },
};

module.exports = UserController;
