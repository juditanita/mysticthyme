import React from 'react'
import ClearBtn from './ClearBtn'

function WorkshopCard({img, title, description, price,placesAvailable,classN, children}) {
  return (
    <div className="w-11/12 md:w-2/3 px-auto my-10 text-center mx-4 md:mx-auto rounded overflow-hidden shadow-lg grid  grid-cols-1  md:grid-cols-3">
       
      
    <img className="w-full md:h-full  md:px-0 sm:px-8  px-2 col-span-1" src={img} alt=""/>
    <div className="px-6 py-4   col-span-1 md:col-span-2">
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="text-gray-700 text-base">
    {description}
      </p>
      <span className=" w-2/3 md:col-span-2  col-span-1 px-3 py-1 text-sm font-bold text-gray-700 mr-2 my-2 ">cost: <span className="text-red-800 ">{price}/person</span></span> 
  
    </div>
    <div className='bg-red-200 order-first mx-2 sm:mx-8 md:order-none md:mx-0 col-span-1 md:w-full flex flex-col '>
    <span className="inline-block    text-md py-4 font-semibold text-red-800  "> {placesAvailable} places available</span>
   
          
          
          </div>
          <div className={`col-span-1  md:col-span-2 ${classN}`}>
            <ClearBtn classN={`bg-white mb-4 `}>Get Tickets</ClearBtn>
            {children}</div>
          
          
          
  </div>
  )
}

export default WorkshopCard