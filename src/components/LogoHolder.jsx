import React from 'react'
import img from "../assets/website-imgs/logoB.png";
import { Link } from "react-router-dom";

function LogoHolder({className,children,classNameH3}) {
 
  className=`text-sm mt-4 italic ${className}`
  const classN=`text-3xl font-bold uppercase mt-3 md:text-4xl ${classNameH3}`

  return (
    <div className="w-screen grid justify-items-center">
       <Link  to="/" className="pt-4 text-2xl md:text-3xl cursor-pointer flex items-center">
  
   <img src={img} alt="site logo flower" className='w-4/5 mx-auto sm:w-3/4 mb-1'/> 
  
</Link>
<p className={className}>The Healing Herbs Shop & More </p>
<h3 className={classN}>{children}</h3>
    </div>
   
  )
}

export default LogoHolder