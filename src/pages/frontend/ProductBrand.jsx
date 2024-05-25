import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../layouts/LayoutSite/Header';
import Footer from '../../layouts/LayoutSite/Footer';
const ProductBrand = () => {
  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default ProductBrand
