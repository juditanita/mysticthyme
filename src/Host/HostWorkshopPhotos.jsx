import React from 'react'
import { useOutletContext } from 'react-router-dom'

function HostWorkshopPhotos() {
  const { currentWorkshop } = useOutletContext() 
  return (
    <section className=" w-full mx-4 py-6 text-center">
      <img
                  src={currentWorkshop.img}
                  alt={currentWorkshop.title}
                  className="h-1/2 text-center border-2  mx-auto md:block  md:w-10/12"
                />
  </section>
  )
}

export default HostWorkshopPhotos