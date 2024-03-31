import React from 'react';
import { useOutletContext } from "react-router-dom" 


function HostWorkshopInfo() {
  const { currentWorkshop } = useOutletContext() 
  return (
    <div>{currentWorkshop.description}</div>
  )
}

export default HostWorkshopInfo