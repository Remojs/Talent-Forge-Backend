const getCourseDetailController = require("../../controllers/courses/getCourseByID.controller.js")

const getCourseDetailHandler = async (req, res) => {
  let { id } = req.params

  try {
    id = parseInt(id)
    const courseDetail = await getCourseDetailController(id)
    return res.status(200).json(courseDetail)
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
}

module.exports = getCourseDetailHandler
