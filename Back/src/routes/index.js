const express = require("express");
const router = express.Router();

const { getHome } = require("../controllers/index");

/* GET home page. */
router.get("/", getHome);

module.exports = router;
