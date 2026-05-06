const express = require("express");
const router = express.Router();
const {Account}  = require("../Model/db.js");
const { isLoggedIn } = require("../Utilities/isLoggedIn.js");
const { asyncWrap } = require("../Utilities/asyncWrap.js");
const mongoose = require("mongoose");
const {getBalance , transferAmount} = require("../controllers/account.js");

router.get("/balance" ,isLoggedIn,asyncWrap(getBalance));

router.post("/transfer" ,isLoggedIn,asyncWrap(transferAmount));

module.exports = {accountRouter : router};