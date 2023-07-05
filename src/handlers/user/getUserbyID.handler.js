const getUserbyID = require('../../controllers/user/getUserbyID.controller')
const mongoose = require('mongoose')

const userByIdHandler = async (req, res) => {
    try {
        const { id } = req.params
        const allUsers = await getUserbyID(id)
        res.status(200).json(allUsers)
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}

module.exports = userByIdHandler
