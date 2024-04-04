import React from 'react'
import { Link } from 'react-router-dom'

function BackToAllArrow({children,linkGo,relWay}) {
  return (
    <div>
    <Link to={linkGo} className="" relative={relWay} >
      &larr; <span> {children}</span>
      </Link>
    </div>
  )
}

export default BackToAllArrow