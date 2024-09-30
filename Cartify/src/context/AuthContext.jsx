import { createContext, useEffect } from "react";
import { useState } from "react";
import axiosClient from "../axios-client";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [ user, setUser ] = useState(null);
    const [ token, setToken ] = useState(localStorage.getItem('token'));
    const [ ready, setReady ] = useState(false);

    const login = ({user, token}) => {
        localStorage.setItem('token', token);
        setUser(user);
        setToken(token);
        setReady(true);
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
        setToken(null);
        setReady(true);
    }

    const fetchUser = async () => {
        try {
            const { data } = await axiosClient.post('auth/authenticate');
            setUser(data);
            setReady(true);
        } catch (error) {
            setReady(true);
        }
    };

    useEffect(() => {
        if(token === "undefined"){
            localStorage.removeItem('token');
        }

        if(token){
            fetchUser();
        } else {
            setReady(true);
        }
    }, [token]);

    return (
        <AuthContext.Provider value={{user, token, ready, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};



