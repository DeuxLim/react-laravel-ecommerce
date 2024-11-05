import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

function ProtectedRoute({children}){
    const { token, ready } = useContext(AuthContext);

    if(!ready){
        return null;
    }

    if(!token){
        return <Navigate to="/auth" />;
    }

    return children;
}

export default ProtectedRoute;
