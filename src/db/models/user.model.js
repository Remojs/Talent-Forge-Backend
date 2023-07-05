const mongoose = require("mongoose")

const userSchema =  mongoose.Schema({
    name:{
        type: String,
        required: true
    },

    email:{
        type: String,
        required: true
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

    interactions:{
        friends:{
            type: Array
        },
        savedCourses:{
            type: Array
        },
        posts:{
            type: Array
        }
    }
},
{versionKey: false});

module.exports = mongoose.model("User", userSchema)