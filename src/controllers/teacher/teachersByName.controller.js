const teacherSchema = require('../../db/models/teacher.model')
const mongoose = require('mongoose')

const getTeacherbyName = async (name) => {
    try{ 
        teachers = await teacherSchema.find({name: name}).exec()
        return teachers
    } catch (error) {
        console.log(error.message) 
    }
}

module.exports = getTeacherbyName