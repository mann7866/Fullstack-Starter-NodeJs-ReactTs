const router = require("express").Router();
const authController = require("../http/controllers/auth/auth.controller");

router.post("/login", authController.login);

module.exports = router;
