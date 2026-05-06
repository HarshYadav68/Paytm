const jwt = require("jsonwebtoken");

const isLoggedIn = (req,res,next)=>{

    const  token = req.headers.authorization;
    
    try{
        const decoded = jwt.verify(token , process.env.JWT_SECRET);
        if(decoded){
            console.log("decoded from isloggedin  :  ",decoded)
            req.userId = decoded._id;
            next();
            return;
        }
    }
    catch(err){
        res.status(403).json({msg : "Please login yourself / create a account"})
    }
}

module.exports = {isLoggedIn};