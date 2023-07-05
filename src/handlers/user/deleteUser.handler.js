const deleteUsers = require('../../controllers/user/deleteUser.controller');
const mongoose = require('mongoose')

const deleteUsersHandler = async(req, res) => {
    try {
        const { id } = req.params;
        const userDeleted = await deleteUsers(id)
        res.status(200).json(userDeleted)
    } catch (error) {
        res.status(500).send({error: error.message})
    }
}

module.exports = deleteUsersHandler