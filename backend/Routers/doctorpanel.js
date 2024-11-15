const express = require("express");
const router = express.Router();
const zod = require("zod");
const { Doctorintro } = require("../mongodb/db");
console.log("reaches in the doctor panel");

const descriptionSchema = zod.object({
    Name: zod.string(),
    Appointment_fee: zod.string(),
    Experience: zod.string(),
    Detail: zod.string(),
    Address: zod.string(),                            
    Age: zod.string(),
    Education: zod.string(),
    About: zod.string()
})

router.get("/hello", (req,res)=>{
    res.send("hi from the doctorpanel")
})
router.post("/description", async(req,res)=>{
    const payload = descriptionSchema.safeParse(req.body);
    if(!payload){
        return res.status(404).json({
            message: "Schemas not verified"
        })
    }
    const Doctor = await Doctorintro.create({
        Name: req.body.Name,
        Appointment_fee: req.body.Appointment_fee,
        Experience: req.body.Experience,
        Detail: req.body.Detail,
        Address: req.body.Address,
        Age: req.body.Age,
        Education: req.body.Education,
        About: req.body.About
    })
    const Doctorid = Doctor._id;
    return res.json({
        Message: "Doctor details has succesfully feeded",
        Doctorid: Doctorid
    })
})

module.exports = router;