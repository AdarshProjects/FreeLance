const express = require("express");
const zod = require("zod");
const { PatientINFO } = require("../mongodb/db");
const router = express.Router();
console.log("reached in the patientpa")

const patientinfo = zod.object({
    name: zod.string(),
    height: zod.string(),
    weight: zod.string(),
    age: zod.string(),
    bloodtype: zod.string(),
    gender: zod.string(),
    healthconcern: zod.string(),
})

router.get("/testing",(req,res)=>{
    res.send("hello hi from the patientpanel")
})

router.post("/patientinfo", async(req,res)=>{
    const payload = patientinfo.safeParse(req.body);
    if(!payload){
        return res.status(404).json({
            message: "body is not recieved in this element"
        })
    }
    const patient = await PatientINFO.create({
        name: req.body.name,
        height: req.body.height,
        weight: req.body.weight,
        age: req.body.age,
        bloodtype: req.body.bloodtype,
        gender: req.body.gender,
        healthconcern: req.body.healthconcern,
    })

    res.json({
        message: "Patient info has been saved",
        patient
    })
})

router.get("/particularpatient", async(req,res)=>{
    const {patientid} = req.query;
    const patient = await PatientINFO.findOne({_id : patientid});
    if(!patientid){
        return res.json({
            message:"patient ID is not found in this "
        })
    }
    if(patient){
        return res.json({
            message: "particular patient has been found",
            patient
        })
    }else{
        return res.status(404).json({
            message: "error in finding the doctor"
        })
    }
})

module.exports = router;