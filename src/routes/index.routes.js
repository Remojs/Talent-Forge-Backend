const { Router } = require("express")

const User = require("./user.routes")
const Courses = require("./courses.routes")
const Teacher = require('./teacher.routes')
const Login = require("./login.routes")
const router = Router()

router.use("/user", User)
router.use("/courses", Courses)
router.use("/teacher", Teacher)
router.use("/login", Login)

module.exports = router

