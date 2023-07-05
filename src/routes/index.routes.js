const { Router } = require("express")

const User = require("./user.routes") 
const Courses = require("./courses.routes")
const Teacher = require('./teacher.routes')
//const CartHandler = require('../handlers/cart.handler') 
const router = Router()

router.use("/user", User)
router.use("/courses", Courses)
router.use("/teacher", Teacher)
//router.get("/cart", CartHandler)

module.exports = router

