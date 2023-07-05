const courseSchema = require('../../db/models/course.model')
const mongoose = require('mongoose')

const getAllCourses = async () => {
    try{ 
        courses = courseSchema.find()
        return courses
    } catch (error) {
        console.log(error.message) 
    }
}

module.exports = getAllCourses