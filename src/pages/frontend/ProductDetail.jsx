import React from 'react'
import { Outlet } from 'react-router-dom'

const ProductDetail = () => {
  return (
    <div>
      <header/>
      <Outlet/>
      <footer/>
    </div>
  )
}

export default ProductDetail
