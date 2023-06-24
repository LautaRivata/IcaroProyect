const express = require('express');
const router = express.Router();

/* GET Products listing. */
router.get('/', function(req, res, next) {
  res.render('detailProducts');
});

module.exports = router;
