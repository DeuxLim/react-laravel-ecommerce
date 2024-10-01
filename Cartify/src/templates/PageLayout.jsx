import { Outlet } from 'react-router-dom'
import Navigation from '../components/Navigation'

export default function PageLayout() {
  return (
    <div className='h-svh'>
        <Navigation />
        <Outlet/>
    </div>

  )
}
