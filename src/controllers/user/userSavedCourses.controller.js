const userSchema = require("../../db/models/user.model")
const mongoose = require("mongoose")

const userSavedCourses = async (id) => {
  console.log(id)
  try {
    const user = await userSchema.findById(id)
    console.log(user)
    if (!user) {
      throw new Error("User not found")
    }
    const savedCourses = user.interactions.savedCourses

    return savedCourses
  } catch (error) {
    throw new Error("Failed to retrieve user saved cousers: " + error.message)
  }
}

module.exports = userSavedCourses
