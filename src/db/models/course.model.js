const mongoose = require("mongoose")
const { v4: uuidv4 } = require("uuid");

const responseSchema = mongoose.Schema({
    id: {
        type: String,
        default: uuidv4,
        required: true,
    },
    response: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
  });

const commentSchema = mongoose.Schema({
    id: {
        type: String,
        default: uuidv4,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    responses: {
        type: [responseSchema],
        default: [],
    },
  });

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

    comments: {
        type: [commentSchema]
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