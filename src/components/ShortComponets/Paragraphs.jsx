import React from 'react'

function Paragraphs({children,className}) {
    const classN=`text-gray-700 w-75 mx-auto ${className}`
    
  return (
    <p className={classN}>{children}</p>
  )
}

export default Paragraphs