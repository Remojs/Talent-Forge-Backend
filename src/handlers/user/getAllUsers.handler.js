const getAllUsers = require('../../controllers/user/getAllUsers.controller')
const mongoose = require('mongoose')

const allUsersHandler = async(req, res) => {
    try {
        const allUsers = await getAllUsers()
        res.status(200).json(allUsers)
    } catch (error) {
        res.status(500).send({error: error.message})
    }
}

module.exports = allUsersHandler