import InputBox from "./common/InputBox";
import Users from "./smallerComponents/Users.jsx";
import { useEffect } from "react";
import {bulk , getMe } from "../api/paytm.js";
import { useState } from "react";

function Dashboard(){

    let [user,setUser] = useState("");
    let [displayUsers , setDisplayUsers] = useState([]);
    let [userInfo , setuserInfo] = useState(null);

    async function tempFun(user){
        const res = await bulk(user);
        setDisplayUsers(res.data.users)
        return;
    }

    useEffect( ()=>{
        async function getUserData(){
           const res =  await getMe();
           setuserInfo(res.data.userInfo);
        }

        getUserData();
    } , []);

    useEffect(()=>{
        tempFun(user);
    } , [user])


    return (
        <div className="w-full h-screen"> 

            <div className="flex justify-between p-3 border-b border-gray-100">
                <div className="font-bold"> Paytm App </div>

                <div className="flex"> 
                    <div> Hello,{userInfo?.firstName || "User"} </div>
                    <div className="bg-slate-200 ms-5 border border-slate-300 h-6 w-6 rounded-full  flex flex-col justify-center text-center "> {userInfo?.firstName[0].toUpperCase() || "U"} </div>
                </div>
            </div>

            <div className="px-5">
                <div className="py-5 font-semibold" > Your balance : &#8377; {userInfo?.balance.toLocaleString("en-IN")|| "XXXX"} </div>

                
                <InputBox label="Users" placeholder="Search users" id="seachUsers" type="text" onChange={(e)=>(setUser(e.target.value))} value={user} />

                <div className="[&>div:nth-of-type(even)]:bg-slate-100">

                    {displayUsers.map((user)=>( <Users user={user} key={user.email}/> ))}

                </div>
 
            </div>

            
        </div>
    )
}

export default Dashboard;