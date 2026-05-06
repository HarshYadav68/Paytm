
import Button from "./common/Button";
import InputBox from "./common/InputBox";
import Heading from "./common/Heading";
import SubHeading from "./common/SubHeading";
import BottomWarning from "./common/BottomWarning";
import {signup} from "../api/paytm.js";
import {useState} from "react"


function Signup(){
    let [firstName,setFirstName] = useState("");
    let [lastName,setLastName] = useState("");
    let [email,setEmail] = useState("");
    let [password,setPassword] = useState("");

    return (
        <div className="bg-blue-100 w-full h-screen">  
            <div className="flex ">

                <div className="bg-white w-80 h-max mx-auto mt-10 rounded-lg shadow-lg  ">

                    <div className="p-6">
                        <Heading heading="Sign up"/>
                        <SubHeading subheading="Enter your information to create an account"/>

                        <InputBox label="First Name"  placeholder="John"          id="firstName"  type="text"       value={firstName} onChange={(e)=>(setFirstName(e.target.value))}   />
                        <InputBox label="Last Name"   placeholder="Doe"           id="lastName"   type="text"       value={lastName}  onChange={(e)=>(setLastName(e.target.value))}    />
                        <InputBox label="Email"       placeholder="xyz@gamil.com" id="email"      type="email"      value={email}       onChange={(e)=>(setEmail(e.target.value))}    />
                        <InputBox label="Password"    placeholder="John"          id="password"   type="text"   value={password}  onChange={(e)=>(setPassword(e.target.value))}    />

                        <Button label="Sign up" onClick={ async () => { 
                            await signup( {firstName, lastName, email, password}) ;
                        }} />

                        <BottomWarning label="Already have an account ?  " linkText="Login" to="/signin" />
                    </div>   
               </div>
            </div> 
        </div>
    )
}

export default Signup;