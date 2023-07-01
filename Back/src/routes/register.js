const express = require("express");
const router = express.Router();

const { getRegister, postRegister } = require("../controllers/register");

/* GET Products listing. */
router.get("/", getRegister);

router.post("/", postRegister);

module.exports = router;
