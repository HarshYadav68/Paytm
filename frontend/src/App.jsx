import "./App.css";
import {lazy,Suspense} from "react";
import {Routes,Route} from "react-router-dom";
const Signup  = lazy(()=> import("./components/Signup" ));
const Signin = lazy(()=>(import("./components/Signin")));
const Dashboard = lazy(()=>(import("./components/Dashboard")));
const Send = lazy(()=>(import("./components/Send")));


function App() {

  return (
    <Routes>  
      <Route path="/signup"     element={ <Suspense fallback={<div> loading.... </div>}>  <Signup/>     </Suspense>  }       />   
      <Route path="/signin"     element={ <Suspense fallback={<div> loading.... </div>}>  <Signin/>     </Suspense>   }      />  
      <Route path="/dashboard"  element={ <Suspense fallback={<div> loading.... </div>}>  <Dashboard/>  </Suspense>  }       /> 
      <Route path="/send"       element={ <Suspense fallback={<div> loading.... </div>}>  <Send/>  </Suspense>  }       />
    </Routes>

  )
}

export default App
