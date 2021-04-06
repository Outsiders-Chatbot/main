const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/PI')
.then( ()=>{console.log('connected to MongoDB...')} )
.catch( (er)=> console.log(er) )

const courseSchenma = new mongoose.Schema({
    progress : Number ,
    start_sub : Date ,
    end_sub : Date , 
    courses_id: 
        { required: true,
          type: mongoose.Schema.Types.ObjectId,
          ref: "course"
        },
    user_id:
        { required: true,
          type: mongoose.Schema.Types.ObjectId,
          ref: "user"
        },


})

const porteuseDonneUserCourses = mongoose.model('porteuseDonneUserCourses',courseSchenma)

exports.PorteuseDonneUserCourses = porteuseDonneUserCourses;