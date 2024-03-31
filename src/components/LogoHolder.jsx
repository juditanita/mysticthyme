import React from 'react'
import img from "../assets/website-imgs/logoB.png";
import { Link } from "react-router-dom";

function LogoHolder({className,children,classNameH3, classNameLogo}) {
 
  className=`sm:text-sm mt-4 italic text-xs ${className}`
  classNameLogo=`w-4/12  mx-auto md:w-2/4 mb-1 sm:flex  ${classNameLogo}`
  const classN=`text-3xl font-bold uppercase mt-3 md:text-4xl ${classNameH3}`

  return (
    <div className="w-screen grid justify-items-center">
       <Link  to="/" className="pt-0 text-xl md:text-xl cursor-pointer flex items-center">
  
   <img src={img} alt="site logo flower" className={classNameLogo}/> 
  
</Link>
<p className={className}>The Healing Herbs Shop & More </p>
<h3 className={classN}>{children}</h3>
    </div>
   
  )
}

export default LogoHolder