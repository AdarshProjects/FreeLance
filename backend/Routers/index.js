const express = require("express");
const router = express.Router();
const userrouter = require('./users');
const doctorpanel = require("./doctorpanel");

router.use("/user", userrouter);
router.use("/doctorpanel", doctorpanel);

module.exports = router;
