import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';

const LayoutAdmin = () => {
  return (
    <>
      <Header/>
      <main className='w-100'><Outlet/></main>
      <Footer/>
    </>
  );
};

export default LayoutAdmin;
