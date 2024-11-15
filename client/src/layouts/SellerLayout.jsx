import { Outlet } from "react-router-dom";
import DashboardLayout from "@/layouts/DashboardLayout"
import { SellerMenu } from "@/configs/SidebarConfig";

export default function SellerLayout(){
    return (
        <DashboardLayout sidebarConfig={SellerMenu}>
            <Outlet/>
        </DashboardLayout>
    );
}