import { Outlet } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function PageLayout() {
  return (

    <div className='h-screen flex flex-col'>
        <Navigation />

        <div className="flex-grow">
            <Outlet/>
        </div>

        <Footer />
    </div>

  )
}
