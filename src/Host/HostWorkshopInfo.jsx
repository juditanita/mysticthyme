import React from 'react';
import { useOutletContext } from "react-router-dom" 


function HostWorkshopInfo() {
  const { currentWorkshop } = useOutletContext() 
  return (
   
    <section className="flex w-2/3 mx-4 py-6"> 

<h3>{currentWorkshop.title}</h3>

    <span>{currentWorkshop.price}</span>


    <h4>Description: <span>{currentWorkshop.description}</span></h4> 

    <h4>Place available<span>{currentWorkshop.placesAvailable}</span></h4> 

</section> 
  )
}

export default HostWorkshopInfo