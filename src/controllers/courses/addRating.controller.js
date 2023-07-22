const courseSchema = require("../../db/models/course.model")
const mongoose = require('mongoose')

const addRating = (id, userId, rating) => {
    try {
        const updatedRating = courseSchema.findByIdAndUpdate(
            id, 
            {$push: {"interactions.ratings": {userId: userId, rating: rating}}},
            {new: true}
            )
        console.log(updatedRating);
        return updatedRating
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = addRating