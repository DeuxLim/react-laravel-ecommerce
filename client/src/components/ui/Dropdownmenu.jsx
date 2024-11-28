import { useRef, useEffect, useState, useContext } from "react";
import { MdOutlineAccountCircle  } from "react-icons/md";
import ResponsiveMenu from "./ResponsiveMenu";

export default function DropdownMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Toggle dropdown
    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };

    // Close dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
       <>
            <div className="relative inline-block text-left" ref={dropdownRef}>
                {/* Dropdown Button */}
                <button
                    onClick={toggleDropdown}
                    className="relative h-10 aspect-square rounded-full bg-black flex items-center justify-center text-sm font-semibold transition-all hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                >
                    <MdOutlineAccountCircle  className="text-3xl text-white"/>
                </button>       

                <ResponsiveMenu isOpen={isOpen}/>        
            </div>
       </>
    );
}
