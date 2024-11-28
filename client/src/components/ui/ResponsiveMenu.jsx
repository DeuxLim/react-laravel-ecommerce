import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from "@/contexts/AuthContext";

function ResponsiveMenu({isOpen}) {
    const { logout } = useContext(AuthContext);
    return (
        <div
            className={`absolute right-0 z-10 mt-2 w-56 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-300 ease-in-out transform ${
            isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
            }`}
        >
            <Link to="/profile" className="block px-4 py-2 text-sm w-full text-left text-gray-700 hover:bg-gray-100">
                Profile
            </Link>
            <Link to="/admin" className="block px-4 py-2 text-sm w-full text-left text-gray-700 hover:bg-gray-100">
                Admin Dashboard
            </Link>
            <Link to="/seller" className="block px-4 py-2 text-sm w-full text-left text-gray-700 hover:bg-gray-100">
                Seller Dashboard
            </Link>
            <button onClick={logout} className="block px-4 py-2 text-sm w-full text-left text-gray-700 hover:bg-gray-100">
                Log out
            </button>
        </div>
    )
}

export default ResponsiveMenu