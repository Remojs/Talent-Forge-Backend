const teacherSchema = require('../../db/models/teacher.model')
const mongoose = require('mongoose')

const getTeacherbyID = async (id) => {
    try{ 
        teacher = teacherSchema.findById(id)
        return teacher
    } catch (error) {
        console.log(error.message) 
    }
}

module.exports = getTeacherbyID