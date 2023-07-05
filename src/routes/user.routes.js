const express = require("express");
const router = express.Router();

const createUserHandler = require('../handlers/user/createUser.handler')
const allUsersHandler = require('../handlers/user/getAllUsers.handler')
const userByIdHandler = require('../handlers/user/getUserbyID.handler')
const userbyNameHandler = require('../handlers/user/getUserbyName.handler')
const editUserHandler = require('../handlers/user/editUser.handler')
const deleteUserHandler = require('../handlers/user/deleteUser.handler')
const userSavedCoursesHandler = require("../handlers/user/userSavedCourses.handler")
const getFriendsHandler = require("../handlers/user/getFriends.handler")

router.post('/', createUserHandler)
router.get('/', allUsersHandler)
router.get('/search/:name', userbyNameHandler)
router.get('/savedcourses/:id', userSavedCoursesHandler)
router.get('/:id', userByIdHandler)
router.put('/edit/:id', editUserHandler)
router.get('/friends/:id', getFriendsHandler)
router.delete('/delete/:id', deleteUserHandler)




module.exports = router;
