import { Outlet } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function PageLayout() {
  return (

    <div className='flex flex-col'>
        <Navigation />

        <div className='flex-1'>
            <Outlet/>
        </div>

        <Footer />
    </div>

  )
}
