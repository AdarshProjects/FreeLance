const express = require("express");
const zod = require("zod");
const { AppointmentINFO } = require("../mongodb/db");
const router = express.Router();

const patientappointmentschema = zod.object({
    patientname: zod.string(),
    healthconcern: zod.string(),
    doctorname: zod.string(),
    speciality: zod.string(),
    day: zod.string(),
    time: zod.string(),
    status: zod.string()
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
        healthconcern: req.body.healthconcern,
        doctorname: req.body.doctorname,
        speciality: req.body.speciality,
        day: req.body.date,
        time: req.body.time,
        status: req.body.status,
    })
    res.json({
        message: "appointment is succesfully stored",
        appointments
    })
})

router.get("/appointments", async(req,res)=>{
    const list = await AppointmentINFO.find({});
    res.json({
        message: "appointments list has been found succesfully",
        list
    })
})

router.put("/appointmentupdate", async (req, res) => {
    console.log("query",req.query);
    const { id } = req.query; // Correct way to extract id from query string
    const { status } = req.body; // Extract the status from the request body
    
    console.log("Updating appointment with ID:", id); // Debugging: log the ID for verification

    try {
        // Check if the status is provided and is valid
        if (!status) {
            return res.status(400).json({ message: "Status is required." });
        }

        // Find and update the appointment
        const userUpdate = await AppointmentINFO.findByIdAndUpdate(
            id,
            { status },  // Update the status field
            { new: true } // Return the updated document
        );

        // Check if the appointment exists and is updated
        if (userUpdate) {
            res.status(200).json({
                message: 'User updated successfully',
                data: userUpdate, // Send back the updated document
            });
        } else {
            res.status(404).json({
                message: 'User not found', // Return error if appointment does not exist
            });
        }
    } catch (error) {
        console.error('Error during appointment update:', error);  // Handle any other errors
        res.status(500).json({ message: 'Server error' }); // Return server error response
    }
});


module.exports = router;