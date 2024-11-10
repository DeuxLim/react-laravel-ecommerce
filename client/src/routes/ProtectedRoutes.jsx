import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

export function AdminRoute({children}){
    const { token , ready , user } = useContext(AuthContext);

    if(!ready){
        return null;
    }

    if(!token){
        return <Navigate to="/auth"/>;    
    }

    if(![1].includes(user.role_id)){
        return null;
    }

    return children;
}

export function UserRoute({children}){
    const { token, ready, user } = useContext(AuthContext);

    
    if(!ready){
        return null;
    }
    
    if(!token){
        return <Navigate to="/auth" />;
    }

    if(![0,1,2].includes(user.role_id)){
        return null;
    }

    return children;
}

export function SellerRoute({children}){
    const { token, ready, user } = useContext(AuthContext);

    if(!ready){
        return null;
    }

    if(!token){
        return <Navigate to="/auth" />;
    }

    if(![2].includes(user.role_id)){
        return null;
    }

    return children;
}
