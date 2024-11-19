const express = require("express");
const router = express.Router();
const userrouter = require('./users');
const doctorpanel = require("./doctorpanel");
const patientpanel = require("./patientpanel");
const appointmentpanel = require("./appointmentpanel");

router.use("/user", userrouter);
router.use("/doctorpanel", doctorpanel);
router.use("/patientpanel", patientpanel);
router.use("/appointmentpanel", appointmentpanel)

module.exports = router;
