const userSchema = require('../../db/models/user.model')
const mongoose = require('mongoose')

const editUsers = async (id, name, dateOfBirth, email, password, country, description, profileImage, interactions) => {
    try{ 
        user = userSchema.updateOne({_id: id}, {$set: {name, dateOfBirth, email, password, country, description, profileImage, interactions}})
        return user
    } catch (error) {
        console.log(error.message) 
    }
}

module.exports = editUsers