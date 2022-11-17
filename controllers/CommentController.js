const Comment = require("../models/Comment");
const Post = require("../models/Post");

const CommentController = {
  async createComment(req, res, next) {
    try {
      const comment = await Comment.create({
        ...req.body,
        postId: req.params._id,
        userId: req.user._id,
        image: req.file?.filename,
      });
      await Post.findByIdAndUpdate(req.params._id, {
        $push: { commentIds: comment._id },
      });
      res.status(201).send({ msg: "Comentario creado con éxito!", comment });
    } catch (error) {
      console.error(error);
      next(error);
    }
  },

  async getAllComments(req, res) {
    try {
      const comments = await Comment.find().populate("postId");
      res.send(comments);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ msg: "Ha habido un problema al traer los comentarios", error });
    }
  },

  async getCommentById(req, res) {
    try {
      const comment = await Comment.findById(req.params._id);
      res.send(comment);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ msg: "Ha habido un problema al traer el comentario", error });
    }
  },

  async updateCommentById(req, res) {
    try {
      const comment = await Comment.findByIdAndUpdate(
        req.params._id,
        { ...req.body, userId: req.user._id, image: req.file?.filename },
        {
          new: true,
        }
      );
      res.send({ msg: "Comentario actualizado con éxito!", comment });
    } catch (error) {
      console.error(error);
      res.status(500).send({
        msg: "Ha habido un problema al actualizar el comentario",
        error,
      });
    }
  },

  async deleteCommentById(req, res) {
    try {
      const comment = await Comment.findByIdAndDelete(req.params._id);
      res.send({ msg: "Comentario eliminado", comment });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ msg: "Ha habido un problema al eliminar el comentario" });
    }
  },
};
module.exports = CommentController;
