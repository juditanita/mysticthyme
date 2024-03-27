import React from 'react'

import Header from '../components/Header'




import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'





function LayoutCustomers() {
  return (
   <>
   
    <header> <Header/>  </header>
  
  <Outlet/>
   {/* <Footer/> */}
 

  
  
  

  
 
  </>
   
  )
}

export default LayoutCustomers
