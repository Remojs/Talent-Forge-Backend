const userSchema = require('../../db/models/user.model')
const mongoose = require('mongoose')

const addPurchasedCourses = async (id, course ) => {
    try{ 
        course = await userSchema.updateOne({_id: id}, {$push: {purchasedCourses: course}})
        return course
    } catch (error) {
        console.log(error.message) 
    }
}

module.exports = addPurchasedCourses