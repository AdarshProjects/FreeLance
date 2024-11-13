const express = require("express");
const router = express.Router();
const zod = require("zod");
console.log("reaches in the doctor panel");

const descriptionSchema = zod.object({
    
})

router.post("/description", (req,res)=>{
    const payload = descriptionSchema.safeParse(req.body);
    if(!payload){
        return res.status(404).json({
            message: "request is not comes in the schema or not completely request is fetched"
        })
    }
})

module.exports = router;