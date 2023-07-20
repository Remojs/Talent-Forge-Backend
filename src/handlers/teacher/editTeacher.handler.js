const editTeacher = require('../../controllers/teacher/editTeacher.controller')
const mongoose = require('mongoose')

const editTeacherHandler = async(req, res) => {
    try {
        const { id } = req.params;
        const {name, dateOfBirth, email, password, country, description, profileImage, courses, disabled} = req.body
        const teacherUpdated = await editTeacher(id, name, dateOfBirth, email, password, country, description, profileImage, courses, disabled)
        res.status(200).json(teacherUpdated)
    } catch (error) {
        res.status(500).send({error: error.message})
    }
}

module.exports = editTeacherHandler