import React from 'react'
import { Outlet, Navigate } from "react-router-dom" 

function AuthRequired() {
    const authent=true
    if(!authent){
        return <Navigate to="/login"  state={{message: "You must log in first!"}} />
    }
  return (
    <div><Outlet/></div>
  )
}

export default AuthRequired