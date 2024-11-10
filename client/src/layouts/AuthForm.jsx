import { Outlet, useNavigate } from "react-router-dom"
import { AuthContext } from "../contexts/AuthContext"
import { useContext, useEffect } from "react"

export default function AuthForm() {
    const { token } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if(token){
            navigate("/");
        }
    }, [token, navigate]);

    return (
        <div className="h-screen flex justify-center items-center flex-col gap-5 bg-slate-100">
            <div className="w-1/4 h-auto shadow-lg p-5 rounded-md bg-white">
                <div className="h-full">
                    <div className="flex flex-col gap-4">
                        <Outlet/>
                    </div>
                </div>
            </div>
        </div>
    )
}
