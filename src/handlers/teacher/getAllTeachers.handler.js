const getAllTeachers = require('../../controllers/teacher/getAllTeachers.controller')
const mongoose = require('mongoose')

const allTeachersHandler = async(req, res) => {
    try {
        const allTeachers = await getAllTeachers()
        res.status(200).json(allTeachers)
    } catch (error) {
        res.status(500).send({error: error.message})
    }
}

module.exports = allTeachersHandler