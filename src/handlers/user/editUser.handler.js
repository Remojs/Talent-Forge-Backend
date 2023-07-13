const editUsers = require('../../controllers/user/editUser.controller')
const mongoose = require('mongoose')

const editUsersHandler = async(req, res) => {
    try {
        const { id } = req.params;
        const {fullName, username, dateOfBirth, email, password, country, description, profileImage, accountType, registerWith} = req.body
        const userUpdated = await editUsers(id, fullName, username, dateOfBirth, email, password, country, description, profileImage, accountType, registerWith)
        res.status(200).json(userUpdated)
    } catch (error) {
        res.status(500).send({error: error.message})
    }
}

module.exports = editUsersHandler