import { AuthContext } from "../context/AuthContext"
import { useContext } from "react"
function Navigation() {

    const { logout } = useContext(AuthContext);

    return (
        <div className="h-10 flex items-center justify-between px-4 py-2">
            <div className="h-full">
                <span>C A R T I F Y</span>
            </div>

            <div  className="h-full">
                Search bar
            </div>

            <div  className="h-full">
                Menu
            </div>

            <div  className="h-full">
                <button onClick={logout}>Logout</button>
            </div>
        </div>
    )
}

export default Navigation
