const express = require("express");

const {
  getLoginController,
  postLoginController,
  getMyProfile,
  getLogout,
} = require("../controllers/login");

const router = express.Router();

/****************************** Routes  ********************************/

router.get("/", getLoginController);

router.post("/", postLoginController);

router.get("/myProfile", getMyProfile);

router.get("/logout", getLogout);

module.exports = router;
