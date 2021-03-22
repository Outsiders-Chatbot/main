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
    isAdmin : Boolean,
    isValid: Boolean,
    messages: { type : Array , "default" : [] }
})

const user = mongoose.model('user',courseSchenma)

exports.User = user;