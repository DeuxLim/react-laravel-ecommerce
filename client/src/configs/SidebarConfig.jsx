import { FaHome, FaBoxOpen, FaShoppingCart, FaCreditCard, FaUsers, FaUser, FaLifeRing, FaFlag, FaCog, FaSignOutAlt, FaBackspace } from 'react-icons/fa';
import { FaUserShield, FaChartLine, FaTags } from 'react-icons/fa';

export const SellerMenu = [
    { 
        section: "MAIN MENU", 
        tabs: {
            'Dashboard': { icon: <FaHome />, link: "/seller/dashboard" },
            'Orders': { icon: <FaShoppingCart />, link: "/seller/orders" },
            'Products': { icon: <FaBoxOpen />, link: "/seller/products" },
            'Billing': { icon: <FaCreditCard />, link: "/seller/billing" },
            'Customers': { icon: <FaUsers />, link: "/seller/customers" }
        } 
    },
    { 
        section: "ACCOUNT", 
        tabs: {
            'My Account': { icon: <FaUser />, link: "/seller/account" },
            'Get Help': { icon: <FaLifeRing />, link: "/seller/help" },
            'Report': { icon: <FaFlag />, link: "/seller/report" }
        } 
    },
    { 
        section: "DEFAULT", 
        tabs: {
            'Back to shop' : { icon : <FaBackspace/>, link: "/" },
            'Settings': { icon: <FaCog />, link: "/seller/settings" },
            'Log out': { icon: <FaSignOutAlt />, link: "/logout" }
        }
    }
];

export const AdminMenu = [
    { 
        section: "ADMIN PANEL", 
        tabs: {
            'Dashboard': { icon: <FaHome />, link: "/admin/dashboard" },
            'User Management': { icon: <FaUserShield />, link: "/admin/users" },
            'Orders': { icon: <FaShoppingCart />, link: "/admin/orders" },
            'Product Management': { icon: <FaBoxOpen />, link: "/admin/products" },
            'Billing & Finance': { icon: <FaCreditCard />, link: "/admin/billing" },
            'Analytics': { icon: <FaChartLine />, link: "/admin/analytics" }
        } 
    },
    { 
        section: "CATEGORY MANAGEMENT", 
        tabs: {
            'View Categories': { icon: <FaTags />, link: "/admin/categories" },
            'Add Category': { icon: <FaTags />, link: "/admin/categories/add" },
            'Edit Category': { icon: <FaTags />, link: "/admin/categories/edit" },
            'Delete Category': { icon: <FaTags />, link: "/admin/categories/delete" }
        } 
    },
    { 
        section: "SUPPORT", 
        tabs: {
            'Help Desk': { icon: <FaLifeRing />, link: "/admin/help" },
            'Reports': { icon: <FaFlag />, link: "/admin/reports" }
        } 
    },
    { 
        section: "SETTINGS", 
        tabs: {
            'Site Settings': { icon: <FaCog />, link: "/admin/settings" },
            'Log out': { icon: <FaSignOutAlt />, link: "/logout" }
        }
    }
];