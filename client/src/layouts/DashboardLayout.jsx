import React from 'react'
import Sidebar from '../components/dashboard/Sidebar'
import Dashboard from '../components/dashboard/Dashboard'
import { FaHome, FaBoxOpen, FaShoppingCart, FaCreditCard, FaUsers, FaUser, FaLifeRing, FaFlag, FaCog, FaSignOutAlt } from 'react-icons/fa';

function DashboardLayout() {
    const sections = [
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
              'Settings': { icon: <FaCog />, link: "/seller/settings" },
              'Log out': { icon: <FaSignOutAlt />, link: "/logout" }
          }
      }
  ];

  return (
    <div className='flex h-screen bg-stone-100 gap-4 p-4'>
        <Sidebar sections={sections}/>
        {/* TO DO : MAKE THIS REUSABLE BOTH FOR ADMIN AND SELLER ACCOUNTS */}
        <Dashboard/>
    </div>
  )
}

export default DashboardLayout