import React from 'react'
import { Link,Outlet } from 'react-router-dom'

function HostLayout() {
  const className='border-2 border-gray-200 bg-blue-100   py-2 w-2/5 text-center sm:w-auto sm:py-2 sm:px-4'
  return (
    <> 

    <nav className="host-nav flex sm:justify-between flex-col mx-20 pt-20  gap-4   sm:flex-row  sm:px-10 md:mx-20  xl:mx-40"> 

        <Link to="." className={className}>Dashboard</Link> 

        <Link to="income" className={className}>Income</Link> 

        <Link to="reviews" className={className}>Reviews</Link> 

    </nav> 

    <Outlet /> 

</> 
  )
}

export default HostLayout