const mongoose = require("mongoose");
const addRating = require("../../controllers/courses/addRating.controller");

const addRatingHandler = async (req, res) => {
	try {
        const { id } = req.params
		const { userId, rating } = req.body;
		const newRatingData = await addRating(id, userId, rating);
        res.status(200).json(newRatingData)
	} catch (error) {
        res.status(500).send({error: error.message})
    }
};

module.exports = addRatingHandler