const teacherSchema = require('../../db/models/teacher.model')
const mongoose = require('mongoose')

const getAllTeachers = async () => {
    try{ 
        teachers = teacherSchema.find()
        return teachers
    } catch (error) {
        console.log(error.message) 
    }
}

module.exports = getAllTeachers