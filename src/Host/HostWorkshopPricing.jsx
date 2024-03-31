import React from 'react';
import { useOutletContext } from "react-router-dom" 

function HostWorkshopPricing() {
  const { currentWorkshop } = useOutletContext() 
  return (
    <div>{currentWorkshop.price}</div>
  )
}

export default HostWorkshopPricing

