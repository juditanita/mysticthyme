import React from 'react'

function ClearBtn({children,classN}) {
    const className =`border  border-double border-b-2 border-black text-black mx-auto px-6 py-2 text-xl ${classN}`
  return (
    <button
    className={className}
  >
    {children}
  </button>
  )
}

export default ClearBtn