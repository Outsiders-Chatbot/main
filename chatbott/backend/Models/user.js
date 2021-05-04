const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/PI')
.then( ()=>{console.log('connected to MongoDB...')} )
.catch( (er)=> console.log(er) )

const courseSchenma = new mongoose.Schema({
    username: String ,
    password : String , 
    email:{
        type:String,
        unique :true
    } , 
    role: {
        type: String,
        enum : ['user','admin','superAdmin'],
        default: 'user'
    },
    isValid: Boolean,
    messages: { type : Array , "default" : [] },
    intrest: String,
    courses_id: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "porteuseDonneUserCourses"
        }],
    quiz_id: [{
              type: mongoose.Schema.Types.ObjectId,
              ref: "quiz"
            }],
    profilePic : String,
    level : String ,
    scenario_id:{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: "porteuseDonneScenarioUser"
        },
    jobs_id:[
        { type: mongoose.Schema.Types.ObjectId,
          ref: "porteuseDonneJobsUser"
         }],
    


})

// validate: [arrayLimit, 'you can only have one scenario']
// function arrayLimit(val) {
//   return val.length <= 1;
// }

const user = mongoose.model('user',courseSchenma)

exports.User = user;