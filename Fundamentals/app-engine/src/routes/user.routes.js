const { Router } = require("express");
const router = Router();
const { validateToken } = require("../helpers/authenticationService");
const {
  createUser,
  getUser,
  getUsers,
  updateUser,
  deleteUser,
} = require("../controllers/user.controllers");

router.route("/").get(getUsers).post(createUser);

router
  .route("/:id")
  .get(validateToken, getUser)
  .put(validateToken, updateUser)
  .delete(validateToken, deleteUser);

module.exports = router;
