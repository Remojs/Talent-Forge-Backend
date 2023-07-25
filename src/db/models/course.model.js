const mongoose = require("mongoose")
const { v4: uuidv4 } = require("uuid");

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
        },
        comments: {
            _id: {
                type: String,
                default: () => uuidv4
            },
            content: {
                type: String,
                required: true
            },
            replies: {
                type: Object,
                default: () => uuidv4
            }
        }
    }
},
{versionKey: false});

module.exports = mongoose.model("Course", courseSchema)