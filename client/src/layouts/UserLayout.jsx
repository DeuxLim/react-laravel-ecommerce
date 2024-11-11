import { Outlet } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function UserLayout() {
  return (

    <div className='flex flex-col min-h-screen'>
        <Navigation />

        <div className='flex-1 pb-10'>
            <Outlet/>
        </div>

        <Footer />
    </div>

  )
}
