import React from 'react';
import { useOutletContext } from "react-router-dom" 

function HostWorkshopPricing() {
  const { currentWorkshop } = useOutletContext() 
  return (
    <section className=""> 
    <h4 className="text-red-800 font-bold pt-6 w-1/2 mx-auto text-center pb-20 ">
    ${currentWorkshop.price}/person
  </h4></section>
   
  )
}

export default HostWorkshopPricing

