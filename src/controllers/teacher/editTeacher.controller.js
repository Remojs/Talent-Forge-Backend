const teacherSchema = require('../../db/models/teacher.model')
const mongoose = require('mongoose')

const editTeacher = async (id, name, dateOfBirth, email, password, country, description, profileImage, courses, disabled) => {
    try{ 
        teacher = teacherSchema.updateOne({_id: id}, {$set: {name, dateOfBirth, email, password, country, description, profileImage, courses, disabled}})
        return teacher
    } catch (error) {
        console.log(error.message) 
    }
}

module.exports = editTeacher