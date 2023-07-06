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
        type: String,
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

    interactions:{
        comments:{
            type: Object
        },
        likes:{
            type: Number
        },
        saves:{
            type: Number
        },
    }
},
{versionKey: false});

module.exports = mongoose.model("Course", courseSchema)