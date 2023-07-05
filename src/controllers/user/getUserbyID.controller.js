const userSchema = require('../../db/models/user.model')
const mongoose = require('mongoose')

const getUserbyID = async (id) => {
    try{ 
        users = userSchema.findById(id)
        return users
    } catch (error) {
        console.log(error.message) 
    }
}

module.exports = getUserbyID