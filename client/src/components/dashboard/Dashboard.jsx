import React from 'react'

function Dashboard({children}) {
  return (
    <div className='bg-white rounded-xl flex-grow p-6 border border-stone-200'>
        {children}
    </div>
  )
}

export default Dashboard