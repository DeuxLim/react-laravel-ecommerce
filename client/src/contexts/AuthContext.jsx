import { createContext, useEffect } from "react";
import { useState } from "react";
import axiosClient from "../services/axiosService";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [ user, setUser ] = useState(null);
    const [ token, setToken ] = useState(localStorage.getItem('token'));
    const [ ready, setReady ] = useState(false);

    const parseJwt = (token) => {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        return JSON.parse(window.atob(base64));
    };

    const isTokenExpired = () => {
        const expirationTime = localStorage.getItem('tokenExpiry');
        if(!expirationTime){
            return true
        }
        return Date.now() > expirationTime;
    }

    const login = ({user, token}) => {
        handleToken(token);
        setUser(user);
        setReady(true);
    };

    const logout = () => {
        handleToken(null);
        setUser(null);
        setReady(true);
    }

    // storage and removal of token.
    // reject user if null or no arguments passed.
    const handleToken = (token) => {
        if(token){
            const decodedToken = parseJwt(token);
            const tokenExpiry = decodedToken.exp * 1000;
            localStorage.setItem('token', token);
            localStorage.setItem('tokenExpiry', tokenExpiry);
            setToken(token);
        } else {
            setToken(null);
            localStorage.removeItem('token');
            localStorage.removeItem('tokenExpiry');
        }
    }

    const fetchUser = async () => {
        try {
            const { data } = await axiosClient.post('auth/authenticate');
            setUser(data);
        } catch (error) {
            console.log(error);
        } finally {
            setReady(true);
        }
    };

    useEffect(() => {
        if(isTokenExpired() || token === "undefined"){
            handleToken(null);
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



