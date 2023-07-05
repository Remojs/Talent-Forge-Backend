const userSchema = require("../../db/models/user.model")
const mongoose = require("mongoose")

const getFriends = async (id) => {
  console.log(id)
  try {
    const user = await userSchema.findById(id)
    console.log(user)
    if (!user) {
      throw new Error("User not found")
    }
    const friends = user.interactions.friends

    return friends
  } catch (error) {
    throw new Error("Failed to retrieve user saved cousers: " + error.message)
  }
}

module.exports = getFriends
