const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/PI')
.then( ()=>{console.log('connected to MongoDB...')} )
.catch( (er)=> console.log(er) )

const courseSchenma = new mongoose.Schema({
    name: String ,
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
    intrests: { type : Array , "default" : [] },
    courses_id: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Course"
        }],
    quiz_id: [{
              type: mongoose.Schema.Types.ObjectId,
              ref: "quiz"
            }],
    profilePic : String,
    level : String ,
    scenario_id:{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: "scenario"
        }


})

// validate: [arrayLimit, 'you can only have one scenario']
// function arrayLimit(val) {
//   return val.length <= 1;
// }

const user = mongoose.model('user',courseSchenma)

exports.User = user;