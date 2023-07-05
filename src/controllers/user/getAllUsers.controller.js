const userSchema = require('../../db/models/user.model')
const mongoose = require('mongoose')

const getAllUsers = async () => {
    try{ 
        users = userSchema.find()
        return users
    } catch (error) {
        console.log(error.message) 
    }
}

module.exports = getAllUsers

