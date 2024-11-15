import { Outlet } from "react-router-dom";
import DashboardLayout from "@/layouts/DashboardLayout"
import { AdminMenu } from "@/configs/SidebarConfig";

export default function AdminLayout(){
    return (
        <DashboardLayout sidebarConfig={AdminMenu}>
            <Outlet/>
        </DashboardLayout>
    );
}