const express = require("express");
const router = express.Router();
module.exports = router;
const {Report} = require('../Models/reports')

// /report
router.post('/add',async (req,res)=>{
    const report = new Report({
        'content' : req.body.content ,
        'img' : req.body.img,
        'sender' : req.body.sender
    })

    try{
        const result = await report.save();
        res.send(result)
        }
        catch(er){
            console.log(er);
        }
})