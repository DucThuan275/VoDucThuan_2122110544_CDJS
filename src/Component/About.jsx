import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../pages/frontend/Header'
import Footer from '../pages/frontend/Footer'

const About = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default About
