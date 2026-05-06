const {ExpressError} = require("./expressError.js");


function asyncWrap(fn){
    return function(req,res,next){
        fn(req,res,next).catch(((err)=>{
            next(new ExpressError(500 , "Something went wrong"));
        }))
    }
}


module.exports = { asyncWrap };