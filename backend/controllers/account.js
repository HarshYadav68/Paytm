const mongoose = require("mongoose");
const {Account}  = require("../Model/db.js");


const getBalance = async(req,res)=>{
 const userAccount = await Account.findOne({userId : req.userId});
 
 if(userAccount){
    return res.status(200).json({balance : userAccount.balance});
 }else{
    return res.status(411).json({msg : "error from getting the balance"});
 }
 
}

const transferAmount = async(req,res)=>{
    let {to , amount} = req.body;

    const session = await mongoose.startSession();

    session.startTransaction();
    
    try{

        // Fetch the accounts within the transaction
        const account = await Account.findOne({ userId : req.userId }).session(session);

        if (!account || account.balance < amount) {
            await session.abortTransaction();
            return res.status(400).json({msg: "Insufficient balance"});
        }

        const toAccount = await Account.findOne({ userId: to }).session(session);

        if (!toAccount) {
            await session.abortTransaction();
            return res.status(400).json({msg: "Invalid account"});
        }

        // Perform the transfer
        await Account.findOneAndUpdate({ userId: req.userId }, { $inc: { balance: -amount } }).session(session);
        await Account.findOneAndUpdate({ userId: to }, { $inc: { balance: amount } }).session(session);

        // Commit the transaction
        await session.commitTransaction();
        res.status(200).json({msg: "Transfer successful"});

    }
    catch(e){
        console.log(e);
        await session.abortTransaction();
        return res.status(500).json({msg : "Transaction failed"});
    }
    
}

module.exports = {getBalance , transferAmount};


