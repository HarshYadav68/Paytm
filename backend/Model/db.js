const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: {
        type : String,
        required : true,
        minLength : 3,
        maxLength : 30,
        trim : true,
        unique : true
    },
    firstName : {
        type : String,
        required : true,
        minLength : 1,
        maxLength : 50,
        trim : true
    },
    lastName : {
        type : String,
        required : true,
        minLength : 1,
        maxLength : 50,
        trim : true
        
    },
    password : {
        type : String,
        required : true,
        trim : true,
        minLength : 8,
        maxLength : 50
    }
})


const User = mongoose.model("User" , userSchema);

const accountSchema = new mongoose.Schema({
    userId :{
        type : mongoose.Schema.Types.ObjectId,
        ref : User ,
        required : true
    },

    balance : {
        type : Number,
        required : true,
        min : 0,
        max : 50000000
    }

});

const Account = mongoose.model("Account" , accountSchema);



module.exports = { User , Account };
