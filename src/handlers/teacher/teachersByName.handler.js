const getTeacherbyName = require('../../controllers/teacher/teachersByName.controller')
const mongoose = require('mongoose')

const teacherByNameHandler = async(req, res) => {
    try {
        const { name } = req.params
        const allTeachers = await getTeacherbyName(name)
        res.status(200).json(allTeachers)
    } catch (error) {
        res.status(500).send({error: error.message})
    }
}

module.exports = teacherByNameHandler 