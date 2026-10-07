const express = require("express");
const router = express.Router();
const User = require('../models/user.js');
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const {saveRedirectUrl}= require("../middlware.js");
const userControllers = require("../controllers/users.js");


router
.route("/signup")
.get(userControllers.renderNewForm)
.post(wrapAsync(userControllers.signUp));

router
.route("/login")
.get(saveRedirectUrl,userControllers.renderLogForm)
.post(passport.authenticate('local', {failureFlash:true, 
failureRedirect:'/login'}),userControllers.login);

router.get("/logout", userControllers.logout);

module.exports = router;