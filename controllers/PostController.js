const Post = require("../models/Post");

const PostController = {
  async createPost(req, res) {
    try {
      const post = await Post.create({
        ...req.body,
        userId: req.user._id,
      });
      res.status(201).send(post);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ message: "Ha habido un problema al crear el post", error });
    }
  },

  async getAllPosts(req, res) {
    try {
      const posts = await Post.find();
      res.send(posts);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ msg: "Ha habido un problema al traer los posts", error });
    }
  },

  async getPostById(req, res) {
    try {
      const post = await Post.findById(req.params._id);
      res.send(post);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ msg: "Ha habido un problema al traernos el post", error });
    }
  },

  async getPostByName(req, res) {
    try {
      const post = await Post.find({
        $text: {
          $search: req.params.title,
        },
      });
      res.send(post);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ msg: "Ha habido un problema al traernos el post", error });
    }
  },

  async updatePostById(req, res) {
    try {
      const post = await Post.findByIdAndUpdate(
        req.params._id,
        { ...req.body, userId: req.user._id },
        {
          new: true,
        }
      );
      res.send({ msg: "Post actualizado con éxito!", post });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ msg: "Ha habido un problema al actualizar el post", error });
    }
  },

  async deletePostById(req, res) {
    try {
      const post = await Post.findByIdAndDelete(req.params._id);
      res.send({ post, msg: "Post eliminado" });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ msg: "Ha habido un problema al eliminar el post" });
    }
  },
};
module.exports = PostController;
