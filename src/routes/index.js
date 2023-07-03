const { Router } = require("express")
const getCourseDetail = require("../handlers/getCourseDetail")
const router = Router()

router.get("/:id", getCourseDetail)

module.exports = router
