import React from 'react'
import Sidebar from '../components/dashboard/Sidebar'
import Dashboard from '@/components/dashboard/Dashboard'

function DashboardLayout({sidebarConfig = [], children}) {
  return (
    <div className='flex h-screen bg-stone-100 gap-4 p-4'>
        <Sidebar config={sidebarConfig}/>
        <Dashboard>
            {children}
        </Dashboard>
    </div>
  )
}

export default DashboardLayout