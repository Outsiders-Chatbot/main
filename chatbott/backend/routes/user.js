const express = require("express");
const router = express.Router();
module.exports = router;
const {User} = require('../Models/user')


router.post('/updateUser', async (req,res)=>{
    const user = await User.findByIdAndUpdate('6087f8ab78657f38ec92c9c6',{
        $set : {
            username : req.body.firstName ,
            email : req.body.email ,
            intrest : req.body.intrest 
        }
    })

    const result = await user.save()

    res.send(result)

})

