const {userValidationSignUp , userValidationSignIn} = require("../userValidation.js");
const {ExpressError} = require("./expressError.js");


const  validateSignUp = (req,res,next)=>{
    const result = userValidationSignUp.safeParse(req.body);
    if(!result.success){
        next(new ExpressError(400 , "Please enter valid data."));
        return;
    }
    next();
}


const validateSignIn = (req,res,next)=>{
    const result = userValidationSignIn.safeParse(req.body);
    if(!result.success){
        next(new ExpressError(400 , "Please enter valid data"));
        return;
    }

    next();
}

module.exports = {validateSignUp , validateSignIn};