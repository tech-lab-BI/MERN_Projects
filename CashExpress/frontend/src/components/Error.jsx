import { Link } from "react-router-dom";

function Error(){
    return <>
     <h1>Page not found</h1>
     <p>Visit Home : <Link to={"/"}>Click here</Link></p>
    </>
}

export default Error;