const editUsers = require('../../controllers/user/editUser.controller')
const mongoose = require('mongoose')

const editUsersHandler = async(req, res) => {
    try {
        const { id } = req.params;
        const {name, dateOfBirth, email, password, country, description, profileImage, interactions} = req.body
        const userUpdated = await editUsers(id, name, dateOfBirth, email, password, country, description, profileImage, interactions)
        res.status(200).json(userUpdated)
    } catch (error) {
        res.status(500).send({error: error.message})
    }
}

module.exports = editUsersHandler