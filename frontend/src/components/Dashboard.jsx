import InputBox from "./common/InputBox";

function Dashboard(){
    return (
        <div className="w-full h-screen"> 

            <div className="flex justify-between p-3 border-b border-gray-100">
                <div className="font-bold"> Paytm App </div>

                <div className="flex"> 
                    <div> Hello,User </div>
                    <div className="bg-slate-200 ms-5 border border-slate-300 h-6 w-6 rounded-full  flex flex-col justify-center text-center "> U </div>
                </div>
            </div>

            <div className="px-5">
                <div className="py-5 font-semibold" > Your balance : Rs 10,000 </div>

                
                <InputBox label="Users" placeholder="Search users" id="seachUsers" type="text" />

                <div className="[&>div:nth-of-type(even)]:bg-slate-100">

                    <div className="flex justify-between mt-1 p-1 "> 
                        <div className="flex justify-between"> 
                            <div className="bg-slate-200 h-6 w-6 rounded-full text-center"> H </div>
                            <div className="ms-5 font-semibold"> Harsh Yadav </div>
                        </div>

                        <button className="bg-black text-white rounded-sm px-3 py-1 transform transition-transform active:scale-95 ">Send money</button>
                    </div>

{/* 2 */}
                 <div className="flex justify-between mt-1 p-1 bg-gray-100 rounded "> 
                     <div className="flex justify-between"> 
                         <div className="bg-slate-200 h-6 w-6 rounded-full text-center flex flex-col justify-center"> H </div>
                         <div className="ms-5 font-semibold"> Harsh Yadav </div>
                     </div>
        
                     <button className="bg-black text-white rounded-sm px-3 py-1 transform transition-transform active:scale-95 ">Send money</button>
                 </div>
        
                 <div className="flex justify-between mt-1 p-1 "> 
                     <div className="flex justify-between"> 
                         <div className="bg-slate-200 h-6 w-6 rounded-full text-center"> H </div>
                         <div className="ms-5 font-semibold"> Harsh Yadav </div>
                     </div>
        
                     <button className="bg-black text-white rounded-sm px-3 py-1 transform transition-transform active:scale-95 ">Send money</button>
                     
                 </div>
        
                 {/* 2 */}
                 <div className="flex justify-between mt-1 p-1 bg-gray-100 rounded "> 
                     <div className="flex justify-between"> 
                         <div className="bg-slate-200 h-6 w-6 rounded-full text-center flex flex-col justify-center"> H </div>
                         <div className="ms-5 font-semibold"> Harsh Yadav </div>
                     </div>
        
                     <button className="bg-black text-white rounded-sm px-3 py-1 transform transition-transform active:scale-95 ">Send money</button>
                 </div>

                </div>
 
                


                
            </div>

            
        </div>
    )
}

export default Dashboard;