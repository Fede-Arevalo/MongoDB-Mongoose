const User = require("../models/User");
const Post = require("../models/Post");
const jwt = require("jsonwebtoken");
const { jwt_secret } = require("../config/keys");

const authentication = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const payload = jwt.verify(token, jwt_secret);
    const user = await User.findOne({ _id: payload._id, tokens: token });
    if (!user) {
      return res.status(401).send({ msg: "No estas autorizado" });
    }
    req.user = user;
    next();
  } catch (error) {
    return res.status(500).send({ msg: "Ha habido un problema con el token" });
  }
};

const isAdmin = async (req, res, next) => {
  const admins = ["admin", "superadmin"];
  if (!admins.includes(req.user.role)) {
    return res.status(403).send({
      msg: "No tienes permiso para realizar esta acción",
    });
  }
  next();
};

const isAuthor = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params._id);
    if (post.userId.toString() !== req.user._id.toString()) {
      return res.status(403).send({ msg: "Este post no es de tu propiedad" });
    }
    next();
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .send({
        msg: "Ha habido un problema al comprobar la autoría del post",
        error,
      });
  }
};

module.exports = { authentication, isAdmin, isAuthor };
