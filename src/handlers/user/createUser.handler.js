const createUser = require('../../controllers/user/createUser.controller')
const mongoose = require('mongoose')

const createUserHandler = async(req, res) => {
    try {
        const {fullName, username, dateOfBirth, email, password, country, description, profileImage, interactions, accountType} = req.body;
        const createdUser = await createUser(fullName, username, dateOfBirth, email, password, country, description, profileImage, interactions, accountType)
        res.status(200).json(createdUser)
    } catch (error) {
        res.status(500).send({error: error.message})
    }
}

module.exports = createUserHandler