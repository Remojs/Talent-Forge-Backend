const createTeacher = require('../../controllers/teacher/createTeacher.controller')
const mongoose = require('mongoose')

const createTeacherHandler = async(req, res) => {
    try {
        const {name, dateOfBirth, email, password, country, description, profileImage} = req.body;
        console.log({name, dateOfBirth, email, password, country, description, profileImage})
        const createdTeacher = await createTeacher(name, dateOfBirth, email, password, country, description, profileImage)
        res.status(200).json(createdTeacher)
    } catch (error) {
        res.status(500).send({error: error.message})
    }
}

module.exports = createTeacherHandler