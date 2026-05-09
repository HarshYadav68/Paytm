import "./App.css";
import {lazy,Suspense} from "react";
import {Routes,Route,Navigate} from "react-router-dom";
const Signup  = lazy(()=> import("./components/Signup" ));
const Signin = lazy(()=>(import("./components/Signin")));
const Dashboard = lazy(()=>(import("./components/Dashboard")));
const Send = lazy(()=>(import("./components/Send")));
import ProtectedRoute from "./components/ProtectedComponent";
import { Toaster } from "react-hot-toast";



function App() {

  return (
    <>
    <Toaster position="top-right" />
    <Routes>  
      <Route  path="/" element={ <Navigate to="/signin" /> } />
      <Route path="/signup"     element={ <Suspense fallback={<div> loading.... </div>}>  <Signup/>      </Suspense>  }       />   
      <Route path="/signin"     element={ <Suspense fallback={<div> loading.... </div>}>  <Signin/>     </Suspense>   }      />  

      <Route path="/dashboard"
             element={ 
              <Suspense fallback={<div> loading.... </div>}> 

                <ProtectedRoute> 
                  <Dashboard/> 
                </ProtectedRoute> 

              </Suspense>  }       
      /> 

      <Route path="/send"
             element={ 
              <Suspense fallback={<div> loading.... </div>}> 

                <ProtectedRoute> 
                  <Send/> 
                </ProtectedRoute> 

              </Suspense>  }      
      />
    </Routes>
    </>
  )
}

export default App


/* 
<Routes>
    <Route path="/" element={<Navigate to="/signin" />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/signin" element={<Signin />} />
    
    ek baar ProtectedRoute, andar saare protected routes 
    <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/send" element={<Send />} />
    </Route>
</Routes>

But iske liye ProtectedRoute mein Outlet use karna padega:
jsximport { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
    const token = localStorage.getItem("token");
    
    if (!token) return <Navigate to="/signin" />;
    
    return <Outlet />;  // 👈 children ki jagah Outlet
} */