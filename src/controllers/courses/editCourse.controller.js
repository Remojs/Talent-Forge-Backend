const courseSchema = require('../../db/models/course.model')
const mongoose = require('mongoose')

const editCourse = async (id, title, cathegory, theme, link, teacher, description, image) => {
    try{ 
        course = courseSchema.updateOne({_id: id}, {$set: {title, cathegory, theme, link, teacher, description, image}})
        return course
    } catch (error) {
        console.log(error.message) 
    }
}

module.exports = editCourse