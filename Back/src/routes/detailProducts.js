const express = require("express");
const router = express.Router();

const { getDetailProducts } = require("../controllers/detailProducts");

/* GET Products listing. */
router.get("/", getDetailProducts);

module.exports = router;
