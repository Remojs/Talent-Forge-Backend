const addPurchasedCourses = require('../../controllers/user/addPurchasedCourses.controller')
const mongoose = require('mongoose')

const addPurchasedCoursesHandler = async(req, res) => {
    try {
        const { id } = req.params;
        const course = {
            image: req.body.image,
            title: req.body.title,
            id: req.body.id,
            teacher: req.body.teacher
        }
        const addedCourse = await addPurchasedCourses(id, course)
        res.status(200).json(addedCourse)
    } catch (error) {
        res.status(500).send({error: error.message})
    }
}

module.exports = addPurchasedCoursesHandler