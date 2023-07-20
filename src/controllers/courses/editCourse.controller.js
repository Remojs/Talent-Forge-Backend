const courseSchema = require('../../db/models/course.model')
const mongoose = require('mongoose')

const editCourse = async (id, title, cathegory, theme, link, teacher, description, image, duration, rating, prize, disabled) => {
    try{ 
        course = courseSchema.updateOne({_id: id}, {$set: {title, cathegory, theme, link, teacher, description, image, duration, rating, prize, disabled}})
        return course
    } catch (error) {
        console.log(error.message) 
    }
}

module.exports = editCourse