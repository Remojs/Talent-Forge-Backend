const assignToTeacher = require('../../controllers/courses/asignToTeacher.controller')
const mongoose = require('mongoose')

const assignToTeacherHandler = async (req, res) => {
    const { inputData, teacherId } = req.body
    const newCourse = await assignToTeacher( inputData, teacherId )
    res.json(newCourse)
}

module.exports = assignToTeacherHandler