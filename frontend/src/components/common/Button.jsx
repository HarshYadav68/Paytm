function Button({label="btn", onClick}){
    return (
        <button onClick={onClick} className="w-full bg-black text-white font-semibold mt-3 p-1.5 rounded-md transition-transform active:scale-95 duration-10"> {label} </button>
    )
}

export default Button;