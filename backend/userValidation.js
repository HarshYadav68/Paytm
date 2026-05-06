const {z}  = require("zod");


const userValidationSignUp = z.object({
    email : z.string().email().min(8).max(30).trim(),
    firstName :z.string().min(1).max(50).trim(),
    lastName : z.string().min(1).max(50).trim(),
    password : z.string().min(8).max(30).trim()
});

const userValidationSignIn = z.object({
    email :     z.string().email().min(8).max(30).trim(),
    password :  z.string().min(8).max(30).trim()
});

module.exports = {userValidationSignUp , userValidationSignIn};
