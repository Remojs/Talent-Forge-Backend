const express = require("express");
const { createPreferencePost, Payment } = require("../handlers/cart.handler");
const router = express.Router();

router.post("/create_preference", createPreferencePost);
router.get("/create_preference", function (req, res) {
  res.send("esto anda?");
});
router.get("/feedback", Payment);

module.exports = router;
