import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const MainLayout = () => {
  return (
    <div className='font-'>
        <Header/>
        <div>
            <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}

export default MainLayout