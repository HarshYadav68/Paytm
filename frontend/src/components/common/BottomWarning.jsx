import {Link} from "react-router-dom";

function BottomWarning({label="xyz", linkText="xyz", to="xyz"}){
    return(
        <div>
            <p className="text-center mt-4 font-medium"> {label} <Link to={to} className="underline"> {linkText} </Link> </p>
        </div>
    )
}

export default BottomWarning;