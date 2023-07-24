// Imports
const router = require("express").Router();

// Imports functions written in userController.js file
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/userController");


router.route("/").get(getUsers).post(createUser);


router.route("/:userId").get(getUser).put(updateUser).delete(deleteUser);


router.route("/:userId/friends/:friendId").post(addFriend).delete(deleteFriend);

// Exports
module.exports = router;
