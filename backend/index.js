require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
// const {mainRouter} = require("./routes/index.js");
const {userRouter} = require("./routes/user.js");
const {accountRouter} = require("./routes/account.js");
const { ExpressError } = require("./Utilities/expressError.js");


main()
.then(()=>{
    console.log("connected with Mongod Atlas");
})
.catch((err)=>{
    console.log("DB err : " , err);
})

async function main(){
    await mongoose.connect(process.env.DB_URL);
}

app.use(cors({
    origin : "http://localhost:5173/"
}));
app.use(express.urlencoded({extended : true}));
app.use(express.json());



// app.use("/api/v1" , mainRouter);
app.use("/api/v1/user" , userRouter);
app.use("/api/v1/account", accountRouter);


// 404 handler
app.use((req,res,next)=>{
    next(new ExpressError(404 , "Not found"));
});


// Universal error handler
app.use((err,req,res,next)=>{
    let {status=500 , message = "something went wrong"} = err;
    res.status(status).json({msg : message});
})

app.listen(3000,()=>{
    console.log("Listening to port 3000");
});

