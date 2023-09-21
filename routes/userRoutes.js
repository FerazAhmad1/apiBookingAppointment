const express = require("express");
const {
  addUser,
  allUser,
  deleteUser,
  editUser,
} = require("./controllers/userController");

const router = express.Router();
router.get("/", allUser);
router.post("/add-user", addUser);
router.route("/:id").delete(deleteUser).patch(editUser);
module.exports = router;
