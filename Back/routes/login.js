const express = require('express');
const router = express.Router();

/* GET Products listing. */
router.get('/', function(req, res, next) {
  res.send('Direccion Login, Metodo: GET');
});

module.exports = router;
