import React from 'react'
import { Link } from 'react-router-dom'

function BackToAllArrow({children,linkGo}) {
  return (
    <div>
    <Link to={linkGo} className="">
      &larr; <span> {children}</span>
      </Link>
    </div>
  )
}

export default BackToAllArrow