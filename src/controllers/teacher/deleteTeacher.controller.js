const teacherSchema = require('../../db/models/teacher.model')
const mongoose = require('mongoose')

const deleteTeacher = async (id) => {
    try{ 
        teacher = teacherSchema.deleteOne({_id: id})
        return teacher
    } catch (error) {
        console.log(error.message) 
    }
}

module.exports = deleteTeacher