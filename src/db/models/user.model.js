const mongoose = require("mongoose")

const userSchema =  mongoose.Schema({
    fullName:{
        type: String,
        required: true
    },
    
    username:{
        type: String,
        required: true,
        unique: true
    },

    email:{
        type: String,
        required: true,
        unique: true,
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

    disabled:{
        type: Boolean
    },

    accountType:{
        type: String,
        required: true
    },

    registerWith:{
        type: String,
        required: true
    },

    interactions:{
        friends:{
            type: Array
        },
        savedCourses:{
            type: Array
        },
        purchasedCourses:{
            type: Array
        },
        posts:{
            type: Array
        }
    }
},
{versionKey: false});

module.exports = mongoose.model("User", userSchema)