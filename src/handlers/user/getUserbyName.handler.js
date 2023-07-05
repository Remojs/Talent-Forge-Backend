const getUserbyName = require('../../controllers/user/getUserbyName.controller')
const mongoose = require('mongoose')

const userByNameHandler = async(req, res) => {
    try {
        const { name } = req.params
        const allUsers = await getUserbyName(name)
        res.status(200).json(allUsers)
    } catch (error) {
        res.status(500).send({error: error.message})
    }
}

module.exports = userByNameHandler 