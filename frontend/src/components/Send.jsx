function Send(){
    return (
        <div className="bg-blue-50 w-full h-screen flex justify-center items-center">
            <div className="bg-white w-100 h-max rounded-md p-10  ">

                <div className="font-bold text-3xl text-center" > Send Money </div>

                <div className="flex mt-7"> 
                    <div className="w-7 h-7 rounded-full bg-green-500 flex justify-center text-white"> A </div>
                    <div className="ms-3 font-semibold text-xl"> Friend's Name </div>
                </div>

                <div className="text-xs font-medium mt-3 ms-1"> Amount (in Rs) </div>

                <input type="number" placeholder="Enter amount" className="w-full mt-1 border border-gray-100 shadow focus:outline-gray-200 rounded py-1 px-3" />
                <button className="w-full mt-5 py-1.5  bg-green-500 text-white rounded transform transition-transform active:scale-95 "> Initiate Transfer </button>
            </div>
            
        </div>
    )
}

export default Send;