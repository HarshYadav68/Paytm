const {User , Account} = require("../Model/db.js");
const jwt = require("jsonwebtoken");


const signup =  async(req,res)=>{
    let {email, firstName,lastName,password} = req.body;

    let existingUser = await User.findOne({email});
    if(existingUser){
        return res.status(411).json({msg : "User already exists, please login your self"});
    }

    const user1  = new User({email, firstName,lastName,password});
    await user1.save();

    // adding the balance to user
    const userId = user1._id;
    const balance = Math.ceil(Math.random() * 50000000);
    const account1 = new Account({userId , balance });
    await account1.save();

    const token = jwt.sign({userId} , process.env.JWT_SECRET);
    return res.status(200).json({token , msg : "user created successfully"}); 
}


const signin = async(req,res)=>{
    let {email,password} = req.body;

    let existingUser = await User.findOne({email ,password});
    if(existingUser){
        let {_id} = existingUser;
        const token = jwt.sign({_id} , process.env.JWT_SECRET);
        return res.status(200).json({token,msg : "login successfully"});
    }

    return res.status(411).json({msg : "Please register yourself first"});
}

const updateInfo = async(req,res)=>{
    let {email,firstName,lastName,password} = req.body;
    const updatingUser = await User.findOneAndUpdate({email} , {firstName,lastName,password} , {runValidators : true ,new : true});
    if(!updatingUser){
        return res.status(411).json({msg : "Error while updating information"})
    }

    return res.status(200).json({msg : "Updated successfully"});
}


const bulkInfo = async(req,res)=>{
    // let {filter} = req.query;
    const filter = req.query.filter || "";

    const users =  await User.find({ 
        _id : { $ne: req.userId },
        $or : [
            {firstName : {$regex : filter} },
            {lastName :  {$regex : filter} } 
        ]
    })

    return res.json({
        users : users.map((user)=>({
            email : user.email,
            firstName : user.firstName,
            lastName : user.lastName,
            id : user._id  }))
    });
}


const getMe = async (req,res)=>{
    const user = await User.findById(req.userId).select("-password");
    const account = await Account.findOne({userId : req.userId});
    
    return res.json({
        userInfo : {
        email : user.email,
        firstName : user.firstName,
        lastName : user.lastName,
        id : user._id,
        balance : account.balance
        }
    });
}

module.exports = {signin,signup,updateInfo,bulkInfo , getMe};

