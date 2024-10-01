import { Outlet } from 'react-router-dom'
import Navigation from '../components/Navigation'

function DefaultLayout() {
  return (
    <div className='h-svh'>
        <Navigation />
        <Outlet/>
    </div>

  )
}

export default DefaultLayout
