const courseSchema = require('../../db/models/course.model')
const mongoose = require('mongoose')

const getCoursebyName = async (title) => {
    try{ 
        course = await courseSchema.findOne({title: title})
        return course
    } catch (error) {
        console.log(error.message) 
    }
}

module.exports = getCoursebyName