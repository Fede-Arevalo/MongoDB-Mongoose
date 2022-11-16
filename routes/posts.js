const express = require("express");
const router = express.Router();
const PostController = require("../controllers/PostController");
const { authentication, isAuthor } = require("../middlewares/authentication");
const upload = require("../middlewares/upload");

router.post(
  "/createPost",
  authentication,
  upload.single("image"),
  PostController.createPost
);
router.get("/getAllPosts", PostController.getAllPosts);
router.get("/getPostById/:_id", PostController.getPostById);
router.get("/getPostByName/:title", PostController.getPostByName);
router.put(
  "/updatePostById/:_id",
  authentication,
  isAuthor,
  upload.single("image"),
  PostController.updatePostById
);
router.delete(
  "/deletePostById/:_id",
  authentication,
  isAuthor,
  PostController.deletePostById
);
router.put("/insertComment/:_id", authentication, PostController.insertComment);
router.put("/like/:_id", authentication, PostController.like);
router.put("/disLike/:_id", authentication, PostController.disLike);

module.exports = router;
