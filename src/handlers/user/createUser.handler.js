const createUser = require('../../controllers/user/createUser.controller')
const mongoose = require('mongoose')

const createUserHandler = async(req, res) => {
    try {
        const {name, dateOfBirth, email, password, country, description, profileImage, interactions} = req.body;
        const createdUser = await createUser(name, dateOfBirth, email, password, country, description, profileImage, interactions)
        res.status(200).json(createdUser)
    } catch (error) {
        res.status(500).send({error: error.message})
    }
}

module.exports = createUserHandler