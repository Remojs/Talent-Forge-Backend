const teacherSchema = require('../../db/models/teacher.model')
const mongoose = require('mongoose')

const editTeacher = async (id, name, dateOfBirth, email, password, country, description, profileImage) => {
    try{ 
        teacher = teacherSchema.updateOne({_id: id}, {$set: {name, dateOfBirth, email, password, country, description, profileImage}})
        return teacher
    } catch (error) {
        console.log(error.message) 
    }
}

module.exports = editTeacher