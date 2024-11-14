import { Link } from "react-router-dom";
import { useState } from "react";
import Dropdownmenu from "@/components/ui/Dropdownmenu";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export default function Navigation() {
    const [ isOpen, setIsOpen] = useState(false);

    return (
        <div className="h-auto min-h-16 flex flex-wrap items-center justify-between px-11 py-4 z-50 mx-60 sticky top-0 bg-white">

            <div className="min-w-44">
                <Link to="/" className="font-semibold text-xl text-nowrap">C A R T I F Y</Link>
            </div>

            <div>
                <ul className="flex items-center justify-center gap-10 flex-wrap">
                    <li>Menu1</li>
                    <li>Menu2</li>
                    <li>Menu3</li>
                    <li>Menu4</li>
                </ul>
            </div>


            <div className="flex justify-center items-center gap-4 relative flex-wrap">
                <div>
                    <input type="text" placeholder="Search product..." className="h-9 w-40 border rounded-full border-neutral-200 px-4 focus:w-60 transition-all"/>
                </div>

                <div>
                    <ShoppingCartOutlinedIcon/>
                </div>

                <div>
                    <Dropdownmenu isOpen={isOpen} setIsOpen={setIsOpen}/>
                </div>
            </div>

        </div>
    )
}
