const userSchema = require('../../db/models/user.model')
const mongoose = require('mongoose')

const getUserbyName = async (name) => {
    try{ 
        users = await userSchema.find({fullName: name}).exec()
        return users
    } catch (error) {
        console.log(error.message) 
    }
}

module.exports = getUserbyName