const { Router } = require("express");
const router = Router();
const { login, check } = require("../controllers/session.controllers");
const { validateToken } = require("../helpers/authenticationService");

router.route("/signin").post(login);
router.route("/check").post(validateToken, check);

module.exports = router;
