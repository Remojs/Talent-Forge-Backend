const mongoose = require("mongoose")

const courseSchema =  mongoose.Schema({
    title:{
        type: String,
        required: true
    },

    cathegory:{
        type: String,
        required: true
    },

    theme:{
        type: Array,
        required: true
    },

    link:{
        type: String,
        required: true
    },

    teacher:{
        type: String,
        required: true
    },

    description:{
        type: String,
        required: false 
    },

    image:{
        type: String,
        required: true
    },

    duration:{
        type: String,
        required: true
    },

    prize:{
        type: Number,
        required: true
    },

    disabled:{
        type: Boolean
    },

    interactions:{
        likes:{
            type: Number
        },
        saves:{
            type: Number
        },
        ratings:{
            type: Object
        }
    }
},
{versionKey: false});

module.exports = mongoose.model("Course", courseSchema)