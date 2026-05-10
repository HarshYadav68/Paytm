import { Navigate } from "react-router-dom";
import { useState ,useEffect } from "react";
import { getMe } from "../api/paytm";

function ProtectedRoute({ children }) {
    const [status, setStatus] = useState("loading"); 

    useEffect(() => {
        getMe()
            .then(()=> setStatus("ok"))
            .catch(() => setStatus("fail"));
    }, []);
    
    if(status === "loading") return <div> loading.... </div>
    if (status === "fail") return <Navigate to="/signin" />;
    return children;
}

export default ProtectedRoute;