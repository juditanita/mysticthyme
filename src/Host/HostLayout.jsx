import React from 'react'
import { Link,NavLink,Outlet } from 'react-router-dom'

function HostLayout() {
  const className='py-2 w-2/5 text-center sm:w-auto sm:py-2 sm:px-4';
    

const activeStyles = { 

  fontWeight: "bold", 

  textDecoration: "underline", 

  color: "#161616",
  
   

} 

  return (
    <> 

    <nav className="host-nav flex sm:justify-between flex-col mx-20 pt-20  gap-4   sm:flex-row  sm:px-10 md:mx-20  xl:mx-40"> 

        <NavLink to="." end className={className}
             style={({ isActive }) => isActive ? activeStyles : null}
             >Dashboard</NavLink> 

        <NavLink to="income" className={className}      style={({ isActive }) => isActive ? activeStyles : null}>Income</NavLink> 

        <NavLink to="reviews" className={className}      style={({ isActive }) => isActive ? activeStyles : null}
        >Reviews</NavLink> 

    </nav> 

    <Outlet /> 

</> 
  )
}

export default HostLayout