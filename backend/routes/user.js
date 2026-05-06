const express = require("express");
const router = express.Router();
const {validateSignUp , validateSignIn} = require("../Utilities/userValidation");

const {User ,Account}  = require("../Model/db.js");
const {asyncWrap} = require("../Utilities/asyncWrap.js");
const { isLoggedIn } = require("../Utilities/isLoggedIn.js");
const {signup,signin,updateInfo,bulkInfo} = require("../controllers/user.js");



router.post("/signup" ,validateSignUp,asyncWrap(signup));


router.post("/signin" ,validateSignIn,asyncWrap(signin ));

router.put("/" ,validateSignUp,isLoggedIn, asyncWrap(updateInfo));

router.get("/bulk" ,isLoggedIn,asyncWrap(bulkInfo));

module.exports =  {userRouter : router}; 