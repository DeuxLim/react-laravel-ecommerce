import { Outlet } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function UserLayout() {
  return (

    <div className=''>
        <Navigation />

        <div className=''>
            <Outlet/>
        </div>

        <Footer />
    </div>

  )
}
