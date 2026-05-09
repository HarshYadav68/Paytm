import {useNavigate} from "react-router-dom";

function Users({user}){
    const navigate = useNavigate();

    return(
        <>
            <div className="flex justify-between mt-1 p-1 "> 
                        <div className="flex justify-between items-center"> 
                            <div className="bg-slate-200 h-6 w-6 rounded-full text-center"> {user.firstName[0]} </div>
                            <div className="ms-5 font-semibold"> {`${user.firstName} ${user.lastName}`} </div>
                        </div>
                        <button onClick={()=>(navigate(`/send/?id=${user.id}&name=${user.firstName} ${user.lastName}`))}  className="bg-black text-white rounded-sm px-3 py-1 transform transition-transform active:scale-95 ">Send money</button>
            </div>
        </>
    )
}

export default Users;


