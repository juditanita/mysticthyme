import React from 'react'
import { Link } from 'react-router-dom'

function BackToAllArrow({children}) {
  return (
    <div>
    <Link to=".." className="">
      &larr; <span>Back to {children}</span>
      </Link>
    </div>
  )
}

export default BackToAllArrow