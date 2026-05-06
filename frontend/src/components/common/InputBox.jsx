function InputBox({label="btn" , placeholder="xyz",id="abc" , type="text",value,onChange}){
    return(
        <div>
                    <label htmlFor={id} className="font-semibold text-sm"> {label} </label>
                    <input type={type} value={value} onChange={onChange} placeholder={placeholder} id={id} className="border rounded-sm my-2 w-full p-1.5 border-gray-300 shadow-sm focus:outline-gray-400" />  

        </div>
    )
}


export default InputBox;