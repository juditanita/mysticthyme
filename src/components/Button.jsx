import React from 'react'

function Button(props) {
    let {
        className,
       
        children
      } = props;
    className=` py-1 px-4 sm:py-2 sm:px-6 rounded-full  duration-500   focus:outline-none focus:ring-4 focus:ring-pink-800 ${className}`
  return (
    <button className={className}
  
    >
{children}

    </button>
  )
}

export default Button