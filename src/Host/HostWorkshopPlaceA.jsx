import React from 'react'
import { useOutletContext } from 'react-router-dom';

function HostWorkshopPlaceA() {
    const { currentWorkshop } = useOutletContext();
  return (
    <section className="text-center ">
    <h4 className="font-semibold ">{currentWorkshop.placesAvailable} places available</h4>
  </section>
  )
}

export default HostWorkshopPlaceA