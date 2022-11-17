const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");
const { authentication } = require("../middlewares/authentication");
const upload = require("../middlewares/upload");

router.post("/register", upload.single("image"), UserController.register);
router.post("/login", UserController.login);
router.get("/loggedIn", authentication, UserController.loggedIn);
router.put(
  "/updateUserById/:_id",
  authentication,
  upload.single("image"),
  UserController.updateUserById
);
router.delete("/logout", authentication, UserController.logout);
router.delete("/deleteUserById/:_id", authentication, UserController.deleteUserById);

module.exports = router;
