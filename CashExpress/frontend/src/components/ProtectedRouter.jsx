import { Navigate } from "react-router-dom";

function ProtectedRouter({ children }){
    const user = JSON.parse(localStorage.getItem("user"));
    if(user !== null){
        return children
    }
    return <Navigate to="/login" />
}

export default ProtectedRouter;
