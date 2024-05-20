import React from 'react'
import Header from './Header'
import {Outlet} from "react-router-dom"
const SellingProducts = () => {
  return (
    <>
    
      <Header />
      <Outlet />

    </>
  )
}

export default SellingProducts