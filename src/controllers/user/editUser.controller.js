const userSchema = require('../../db/models/user.model')
const mongoose = require('mongoose')

const editUsers = async (id, fullName, username, dateOfBirth, email, password, country, description, profileImage, accountType) => {
    try{ 
        user = userSchema.updateOne({_id: id}, {$set: {fullName, username, dateOfBirth, email, password, country, description, profileImage, accountType}})
        return user
    } catch (error) {
        console.log(error.message) 
    }
}

module.exports = editUsers