import React from 'react'

function ReviewCard({reviewName,reviewCountry,reviewDetails}) {
  return (
    <div className='flex flex-col   mx-auto'>
      
       
        <p className='text-gray-700 text-base mb-4 text-pretty text-wrap md:text-balance"'>{reviewDetails}</p>
        <div > <p className='font-bold'>{reviewName}</p>
        <p className='font-thin'>{reviewCountry}</p></div>
       
    </div>
  )
}

export default ReviewCard