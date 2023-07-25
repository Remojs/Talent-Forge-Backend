const mongoose = require("mongoose")

const teacherSchema =  mongoose.Schema({
    name:{
        type: String,
        required: true
    },

    email:{
        type: String,
        required: true,
        unique :true
    },

    dateOfBirth:{
        type: String,
        required: true
    },

    country:{
        type: String,
        required: true
    },

    password:{
        type: String,
        required: true
    },

    description:{
        type: String,
        required: false 
    },

    profileImage:{
        type: String,
        required: false 
    },

    courses:{
        type:Array,
        required: false
    }, 

    disabled:{
        type: Boolean
    }
},
{versionKey: false});


module.exports = mongoose.model("Teacher", teacherSchema)