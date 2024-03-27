import React from 'react'
import Button from '../Button'
import { HiArrowLongRight } from "react-icons/hi2";

function BtnWithArroy({children,className,clName}) {
  const classNArrow=className=`md:text-3xl hero-icon hidden md:block ${className}`;

   
  return (
    <div className='btn-container mt-6 sm:mt-8 flex place-items-center justify-center md:justify-start'> 
    <Button className={`bg-black text-base text-white hover:tracking-wide uppercase ${clName}`}>{children}</Button>
    <HiArrowLongRight className={classNArrow} ></HiArrowLongRight> </div>
  )
}

export default BtnWithArroy