import { Outlet } from "react-router-dom";
import Sidebar from "../components/ui/Sidebar";
export default function SellerLayout(){
    return (
        <div className="flex h-screen">
            <Sidebar/>
            <Outlet/>
        </div>
    );
}