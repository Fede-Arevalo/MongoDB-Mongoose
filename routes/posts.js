const express = require("express");
const router = express.Router();
const PostController = require("../controllers/PostController");
const { authentication, isAuthor } = require("../middlewares/authentication");

router.post("/createPost", authentication, PostController.createPost);
router.get("/getAllPosts", PostController.getAllPosts);
router.get("/getPostById/:_id", PostController.getPostById);
router.get("/getPostByName/:title", PostController.getPostByName);
router.put(
  "/updatePostById/:_id",
  authentication,
  isAuthor,
  PostController.updatePostById
);
router.delete(
  "/deletePostById/:_id",
  authentication,
  isAuthor,
  PostController.deletePostById
);

module.exports = router;
