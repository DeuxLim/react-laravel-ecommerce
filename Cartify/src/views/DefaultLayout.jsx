import { Outlet } from 'react-router-dom'
import Navigation from '../components/Navigation'

function DefaultLayout() {
  return (
    <div>
        <Navigation />

        <Outlet/>
    </div>

  )
}

export default DefaultLayout
