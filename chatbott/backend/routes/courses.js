const express = require("express");
const router = express.Router();
module.exports = router;
const {Course} = require('../Models/Course')
const {User} = require('../Models/user')
const {PDUserCourses} = require('../Models/PorteuseDonneUserCourses')

//courses

router.post('/add',async(req,res)=>{
    const course = new Course({
      title:req.body.title,
      author:req.body.author,
      description:req.body.description,
      domain:req.body.domain,
      requirements:req.body.requirements,
      price:req.body.price,
      rating:req.body.rating,
      duration:req.body.duration,
      date:req.body.date 
  })
  
  try{
    const result = await course.save();
    res.send(result)
    }
    catch(er){
        console.log(er);
    }
  
  })
  
  router.get('/getall',async(req,res)=>{
     const courses = await Course.aggregate([{ $sample: { size: 5 } }]);
     res.send(courses)
  })

  router.get('/getallSavedCourses',async(req,res)=>{
    //const result = await User.findById("60380e67e557ee5e0c8921f6")
    const result = await User.findById("60380e67e557ee5e0c8921f6","_id").populate({
      path : 'courses_id',
      populate : {
        path : 'course_id'
      }
    }).exec() ;
    //one to many - populate the other the progress first then find the name when u populate again
    res.send(result)
 })

  router.post('/addSavedCourse',async(req,res)=>{
    console.log(req.body.course_id) 

const pdUserCourses = new PDUserCourses({
     progress : 0 ,
     course_id : req.body.course_id ,
     user_id : "60380e67e557ee5e0c8921f6"

} )
const result2 = await pdUserCourses.save();
const user = await User.findByIdAndUpdate("60380e67e557ee5e0c8921f6",
{
    $push : {
        courses_id : result2._id 
     }
   }

)

  try{
    const result = await user.save();
    

    res.send(result)
    }
    catch(er){
        console.log(er);
    }
  
  })


  
router.post('/deleteSavedCourse',async(req,res)=>{
  console.log(req.body.course_id) 
 
  const pfuserc =await PDUserCourses.findByIdAndRemove(req.body.course_id);
  console.log(pfuserc);
  const user = await User.findByIdAndUpdate("60380e67e557ee5e0c8921f6",
  {
      $pull : {
          courses_id : pfuserc._id
       }
  }
  
)

    
  try{
    const result = await user.save();
    res.send(result)
    }
    catch(er){
        console.log(er);
    }
  
  })
