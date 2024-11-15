import { useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import { Link } from "react-router-dom";


export default function Sidebar({config}){
    const { user } = useContext(AuthContext);    

    return(
        <div className="w-[20%] flex flex-col">

            {/* TOP */}
            <div className="h-20">
                <div className="bg-white h-full rounded-xl flex gap-2 p-3 border border-stone-200">

                    {/* Display Photo */}
                    <div className="h-14 w-14 rounded-xl overflow-hidden bg-black">
                        {/* <img src={user.display_photo} alt="" /> */}
                    </div>

                    {/* User Information */}
                    <div className="flex-grow">
                        <div className="text-lg text-gray-700 font-semibold"> {user.username} </div>
                        <div className="text-xs text-gray-600 font-light"> {user.email} </div>
                    </div>

                </div>
            </div>

             {/* Middle */}
             <div className="flex-grow overflow-y-auto">
                <div className="h-full p-3 flex flex-col gap-6">

                    {/* Menu Sections */}
                    {config.map((sectionItem, sectionIndex) => (
                        <div key={sectionIndex}>
                            {/* Section Title */}
                            <div className={`py-4 ${sectionIndex !== 0 && "border-t"} text-black text-opacity-35 font-semibold`}>
                                {sectionItem.section}
                            </div>

                            {/* Menu Tabs */}
                            <div className="flex flex-col">
                                {Object.entries(sectionItem.tabs).map(([tabName, tabDetails], tabIndex) => (
                                    <Link 
                                        key={tabIndex} 
                                        to={tabDetails.link} 
                                        className="flex items-center gap-3 px-4 py-2 hover:bg-white hover:rounded-xl hover:font-extrabold group"
                                    >
                                        {/* Icon */}
                                        <span className="text-lg group-hover:text-green-500">{tabDetails.icon}</span>

                                        {/* Tab Name */}
                                        <span>{tabName}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>



            {/* Footer */}
            <div className="">
                
            </div>
        </div>
    );
}