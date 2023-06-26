const express = require('express');
const bcrypt = require("bcrypt"); 

const { getLoginController, postLoginController, getMyProfile, getLogin, getLogout } = require("../controllers/login")

const router = express.Router();

/****************************** Routes  ********************************/

router.get('/', getLoginController);

router.post('/', postLoginController)

router.get("/myProfile", getMyProfile)

router.get("/login", (req, res, next) => res.render("login", { title: 'Login' }))

router.post("/login", getLogin)

router.get('/logout', getLogout)

module.exports = router;