const express = require("express");
const usertControllers = require("../controllers/signup")

const router = express.Router();

router.post("/signup",usertControllers.signup);
router.post("/login",usertControllers.login);

module.exports = router;