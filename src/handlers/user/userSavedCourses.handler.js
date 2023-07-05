const userSavedCourses = require("../../controllers/user/userSavedCourses.controller")

const userSavedCoursesHandler = async (req, res) => {
  try {
    const { id } = req.params
    const response = await userSavedCourses(id)
    return res.status(200).json(response)
  } catch (error) {
    return res.status(400).json({ message: error.message })
  }
}

module.exports = userSavedCoursesHandler
