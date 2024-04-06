import React from 'react'
import { Link, NavLink,Outlet } from 'react-router-dom'
import { IoLogOut } from "react-icons/io5";



function HostLayout() {
  const className='py-2 w-2/5 text-center sm:w-auto sm:py-2 sm:px-4 uppercase';
    

const activeStyles = { 

  fontWeight: "bold", 

  textDecoration: "underline", 

  color: "#161616",
  
   

} 

  return (
    <> 
   <div  className="flex justify-between uppercase mx-4 my-2 hover:font-bold hover:color-pink-800 "><Link to="/">Main Site</Link>
   <Link to="/logout" ><IoLogOut  className="text-2xl"/></Link></div> 
<header className='bg-yellow-600 text-white text-gray-200 font-semibold'> <nav className="host-nav flex sm:justify-between flex-col mx-20 pt-20  gap-4   sm:flex-row  sm:px-10 md:mx-20  xl:mx-40"> 

<NavLink to="." end className={className}
     style={({ isActive }) => isActive ? activeStyles : null}
     >Dashboard</NavLink> 

<NavLink to="income" className={className}      style={({ isActive }) => isActive ? activeStyles : null}>Income</NavLink> 

<NavLink to="reviews" className={className}      style={({ isActive }) => isActive ? activeStyles : null}
>Reviews</NavLink> 
<NavLink to="workshops" className={className}      style={({ isActive }) => isActive ? activeStyles : null}
>
  Workshops</NavLink> 

</nav> </header>
   
<main className='min-h-screen pb-20'> <Outlet /> </main>
   <footer className='mb-0 mt-100 min-w-full'> <div className="flex flex-wrap items-center md:justify-between justify-center  bg-pink-800 pt-10">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-gray-200 font-semibold py-1">
              Copyright ©{" "}
              <span id="get-current-year">{new Date().getFullYear()}</span>
              <Link
                to="/"
                className="text-gray-500 hover:text-gray-800"
                target="_blank"
              >
                {" "}
                Mystic Theme by
              </Link>
              <Link to="/" className="text-blueGray-500 hover:text-gray-800">
                 {" "}Judit Szabo.
              </Link>
            </div>
          </div>
        </div></footer>
   

</> 
  )
}

export default HostLayout