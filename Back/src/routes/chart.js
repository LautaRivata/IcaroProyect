const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  let user;
  if (req.session.user) {
    user = req.session.user;
  } else {
    user = false;
  }
  res.render("chart", { user });
});

module.exports = router;
