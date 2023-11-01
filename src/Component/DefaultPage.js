import React from 'react'
import { Link } from "react-router-dom"
 const DefaultPage = () => {
  return (
    <div>
    <h2 style={{display: "flex" , justifyContent: "center"}}>
         <Link to="/login">Click For Login</Link>
    </h2>
    </div>
  )
}

export default DefaultPage
