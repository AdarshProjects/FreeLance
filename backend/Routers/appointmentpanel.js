const express = require("express");
const zod = require("zod");
const { AppointmentINFO } = require("../mongodb/db");
const router = express.Router();

const patientappointmentschema = zod.object({
    patientname: zod.string(),
    doctorname: zod.string(),
    speciality: zod.string(),
    date: zod.string(),
    time: zod.string()
})

router.get("/testing",(req,res)=>{
    res.send("hi hello ")
})

router.post("/appointmentlist", async(req,res)=>{
    const payload = patientappointmentschema.safeParse(req.body);
    if(!payload){
        return res.status(404).json({
            message: "the appointment are not recieved"
        })
    }
    const appointments = await AppointmentINFO.create({
        patientname: req.body.patientname,
        doctorname: req.body.doctorname,
        speciality: req.body.speciality,
        date: req.body.date,
        time: req.body.time
    })
    res.json({
        message: "appointment is succesfully stored",
        appointments
    })
})

module.exports = router;