const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");
const { authentication } = require("../middlewares/authentication");
const upload = require("../middlewares/upload");

router.post("/register", upload.single("image"), UserController.register);

router.get("/getUserById/:_id", UserController.getUserById);
router.get("/getUserByName/:name", UserController.getUserByName);
router.get("/getAllUsers", UserController.getAllUsers);

router.put(
  "/updateUserById/:_id",
  authentication,
  upload.single("image"),
  UserController.updateUserById
);

router.delete("/deleteUserById/:_id", authentication, UserController.deleteUserById);

router.post("/login", UserController.login);
router.delete("/logout", authentication, UserController.logout);
router.get("/loggedIn", authentication, UserController.loggedIn);

module.exports = router;
