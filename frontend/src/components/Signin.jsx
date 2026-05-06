import Button from "./common/Button";
import InputBox from "./common/InputBox";
import Heading from "./common/Heading";
import SubHeading from "./common/SubHeading";
import BottomWarning from "./common/BottomWarning";


function Signin(){
    return (
        <>  
            <div className="bg-blue-100 w-full h-screen">  
                <div className="flex ">

                    <div className="bg-white w-80 h-max mx-auto mt-10 rounded-lg shadow-lg  ">

                        <div className="p-6">
                            <Heading heading="Sign in"/>
                            <SubHeading subheading="Enter your credentials to access your account"/>

                            <InputBox label="Email"     placeholder="xyz@gamil.com" id="email"      type="email"     />
                            <InputBox label="Password"  placeholder="John"          id="password"   type="password"/>

                            <Button label="Sign in"/>
                            <BottomWarning label="Don't have an account ?  " linkText="Signup" to="/signup" />
                        </div>   
                   </div>
                </div> 
            </div>
        </>
    )
}

export default Signin;
















        

