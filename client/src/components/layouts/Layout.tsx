import Navbar from '../nav/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'

const Layout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
