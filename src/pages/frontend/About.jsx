import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../layouts/LayoutSite/Header';
import Footer from '../../layouts/LayoutSite/Footer';

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
