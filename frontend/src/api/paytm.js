import axios from "axios";

const BASE_URL = "http://localhost:3000/api/v1";


const signup      = (data)=>( axios.post(`${BASE_URL}/user/signup` , data));
const signin      = (data)=>( axios.post(`${BASE_URL}/user/signin` , data));
const editDetails = (data)=>( axios.put(`${BASE_URL}/user/` , data));

const bulk        = (data)=>( axios.get(`${BASE_URL}/user/bulk?filter=${data}` , {
    headers : { Authorization : localStorage.getItem("token") }
}));

const transfer = (data)=>( axios.post(`${BASE_URL}/account/transfer` , data , {
    headers : {  Authorization: localStorage.getItem("token") } 
}));


const getMe = ()=>( axios.get(`${BASE_URL}/user/me` , {
    headers : { Authorization : localStorage.getItem("token") }
}));

export {signup, signin, editDetails, bulk,  transfer , getMe};