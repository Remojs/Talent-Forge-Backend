const deleteTeacher = require('../../controllers/teacher/deleteTeacher.controller');
const mongoose = require('mongoose')

const deleteTeacherHandler = async(req, res) => {
    try {
        const { id } = req.params;
        const teacherDeleted = await deleteTeacher(id)
        res.status(200).json(teacherDeleted)
    } catch (error) {
        res.status(500).send({error: error.message})
    }
}

module.exports = deleteTeacherHandler