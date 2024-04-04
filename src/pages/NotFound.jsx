import React from 'react'
import BackToAllArrow from '../components/ShortComponets/BackToAllArrow'
import { GiHummingbird } from "react-icons/gi";


function NotFound() {
  return (
    <div className='text-center container mx-6 h-screen flex flex-col justify-center align-content-center gap-6'> 
   <h1 className='text-5xl scale-[3.5]'>404</h1>
<h2 className='text-5xl capitalize'>Ooops <GiHummingbird className="text-green-500 inline-block -mt-8 -ml-4" /> ...!</h2>
    <h4 className='mt-2 w-5/6 mx-auto'>Sorry, the page you are looking for was not found.</h4> 
<BackToAllArrow linkGo={"/"}>Fly to  <span className='text-pink-800 font-semibold uppercase'>Home</span></BackToAllArrow>


</div> 
  )
}

export default NotFound