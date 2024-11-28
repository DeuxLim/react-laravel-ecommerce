import { FaShoppingCart, FaSearch  } from 'react-icons/fa';
import { FaOpencart } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import DropdownMenu from "./ui/Dropdownmenu";

export default function Navigation() {
    

    return (
        <div className="container p-4 flex justify-between items-center sticky top-0 bg-white">
            
            {/* Logo / brandname */}
            <div className="flex justify-start items-center gap-2">
                <span>
                    <FaOpencart className="font-bold text-4xl"/>
                </span>
                <h1 className="hidden md:block font-bold text-xl tracking-wide">
                    cartify
                </h1>
            </div>


            
            <div className="hidden md:flex gap-4">

                {/* Searchbar */}
                <div className="hidden md:block h-10 rounded-full bg-stone-100 px-3 transition-all duration-300 focus-within:w-80 w-36">
                    <div className="flex items-center h-10">
                        <span>
                            <FaSearch />
                        </span>
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full rounded-2xl p-2 outline-none bg-transparent transition-all duration-300"
                        />
                    </div>
                </div>


                {/* icons */}
                <div className="flex gap-4 items-center">
                    <button className="h-10 aspect-square rounded-full bg-stone-100 flex items-center justify-center">
                        <FaShoppingCart className="text-lg "/>
                    </button>
                    
                    {/* TODO : MAKE THIS REUSABLE */}
                    <DropdownMenu/>
                </div>

            </div>

            {/* mobile hamburger menu */}
            <div className="md:hidden">
                <span>
                    {/* TO DO : MAKE THIS FUNCTIONAL */}
                    <IoMenu className="text-4xl"/>
                </span>
            </div>
        </div>
    )
}
