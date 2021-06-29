const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home");

// @desc    Get the home page
// @route   GET /
router.get("/", homeController.getIndex);

// @desc    Get list of streams
// @route   GET /streams
router.get("/streams", homeController.getStreams);

module.exports = router;
