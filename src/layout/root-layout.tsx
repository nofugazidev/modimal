import React from 'react'
import Navbar from "@/components/default/navbar"
import Footer from "@/components/default/footer"
import { Outlet } from 'react-router-dom'
import Banner from '@/pages/banner'

const RootLayout: React.FC = () => {
  return (
    <div>
      <Banner />
      <Navbar />
      <div>
       <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default RootLayout

