const userSchema = require('../../db/models/user.model')
const mongoose = require('mongoose')

const deleteUsers = async (id) => {
    try{ 
        user = userSchema.deleteOne({_id: id})
        return user
    } catch (error) {
        console.log(error.message) 
    }
}

module.exports = deleteUsers