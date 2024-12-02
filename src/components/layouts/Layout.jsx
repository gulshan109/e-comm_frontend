import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Layout = () => {
  return (
    <section className=' flex  w-[100vw] h-[100vh] flex-col sm:w-screen sm:h-screen '>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </section>
  )
}

export default Layout
