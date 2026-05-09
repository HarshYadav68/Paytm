import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { transfer } from "../api/paytm.js"

function Send(){
    const [searchParams] = useSearchParams();
    const to = searchParams.get("id");
    const name = searchParams.get("name");

    let [amount,setAmount] = useState(0);

    return (
        <div className="bg-blue-50 w-full h-screen flex justify-center items-center">
            <div className="bg-white w-100 h-max rounded-md p-10  ">

                <div className="font-bold text-3xl text-center" > Send Money </div>

                <div className="flex mt-7"> 
                    <div className="w-7 h-7 rounded-full bg-green-500 flex justify-center text-white items-center"> { name[0].toUpperCase() } </div>
                    <div className="ms-3 font-semibold text-xl"> { name } </div>
                </div>

                <div className="text-xs font-medium mt-3 ms-1"> Amount (in Rs) </div>

                <input type="number" min={0} max={1000000000} placeholder="Enter amount" onChange={(e)=>(setAmount(e.target.value))} value={amount} className="w-full mt-1 border border-gray-100 shadow focus:outline-gray-200 rounded py-1 px-3" />
                <button onClick={async()=>{
                           await transfer({ to,amount })
                        }} 
                className="w-full mt-5 py-1.5  bg-green-500 text-white rounded transform transition-transform active:scale-95 "> Initiate Transfer </button>
            </div>
            
        </div>
    )
}

export default Send;