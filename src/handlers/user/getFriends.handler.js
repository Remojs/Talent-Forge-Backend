const getFriends = require("../../controllers/user/getFriends.controller")

const getFriendsHandler = async (req, res) => {
  const { id } = req.params
  const friends = await getFriends(id)
  try {
    return res.status(200).json(friends)
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
}

module.exports = getFriendsHandler
