const getTeacherbyID = require('../../controllers/teacher/teachersById.controller')
const mongoose = require('mongoose')

const teacherByIdHandler = async(req, res) => {
    try {
        const {id} = req.params
        const allTeachers = await getTeacherbyID(id)
        res.status(200).json(allTeachers)
    } catch (error) {
        res.status(500).send({error: error.message})
    }
}

module.exports = teacherByIdHandler