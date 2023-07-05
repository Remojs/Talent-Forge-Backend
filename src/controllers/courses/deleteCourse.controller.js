const courseSchema = require('../../db/models/course.model')
const mongoose = require('mongoose')

const deleteCourse = async (id) => {
    try{ 
        course = courseSchema.deleteOne({_id: id})
        return course
    } catch (error) {
        console.log(error.message) 
    }
}

module.exports = deleteCourse