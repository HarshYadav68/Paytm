import axios from "axios";

const BASE_URL = "http://localhost:3000/api/v1/user"

const signup      = (data)=>(axios.post( `${BASE_URL}/signup` , data));
const signin      = (data)=>(axios.post(`${BASE_URL}/signin` , data));
const editDetails = (data)=>(axios.put(`${BASE_URL}/` , data));


export {signup, signin, editDetails};