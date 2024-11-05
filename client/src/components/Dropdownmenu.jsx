import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext, useRef, useEffect } from "react";

export default function DropdownMenu({ isOpen, setIsOpen }) {
    const { logout } = useContext(AuthContext);
    const dropdownRef = useRef(null);

    // Close dropdown if clicked outside
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div ref={dropdownRef} className="relative">
            <div
                className="cursor-pointer bg-gray-300 h-10 w-10 rounded-full flex items-center justify-center overflow-hidden"
                onClick={() => setIsOpen((current) => !current)}
                aria-haspopup="true"
                aria-expanded={isOpen}
                tabIndex={0}
            >
                <img src="https://picsum.photos/150" alt="Profile" />
            </div>

            {isOpen && (
                <nav className="absolute top-12 right-4 border rounded-md bg-white shadow-lg" role="menu">
                    <ul className="flex flex-col items-start justify-start min-w-40 text-base">
                        <li className="w-full hover:bg-slate-100">
                            <Link to="/profile" className="block py-2 px-4 text-left" role="menuitem">Profile</Link>
                        </li>
                        <li className="w-full hover:bg-slate-100">
                            <Link to="/profile" className="block py-2 px-4 text-left" role="menuitem">Seller Center</Link>
                        </li>
                        <li className="w-full hover:bg-slate-100">
                            <Link to="/seller/add-product" className="block py-2 px-4 text-left" role="menuitem">Add new product</Link>
                        </li>
                        <li className="w-full hover:bg-slate-100">
                            <Link to="/profile" className="block py-2 px-4 text-left" role="menuitem">Settings</Link>
                        </li>
                        <li className="w-full hover:bg-slate-100">
                            <button onClick={logout} className="block w-full text-left py-2 px-4" role="menuitem">
                                Logout
                            </button>
                        </li>
                    </ul>
                </nav>
            )}
        </div>
    );
}
