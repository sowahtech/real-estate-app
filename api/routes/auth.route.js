const express = require("express");
const signin = require("../controllers/auth.controller.js");
const signup = require("../controllers/auth.controller.js");

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);

module.exports = router;
