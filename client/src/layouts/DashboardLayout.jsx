import React from 'react'
import Sidebar from '../components/dashboard/Sidebar'
import Dashboard from '../components/dashboard/Dashboard'

function DashboardLayout() {
  return (
    <div className='flex h-screen bg-stone-100 gap-4 p-4'>
        <Sidebar/>
        <Dashboard/>
    </div>
  )
}

export default DashboardLayout