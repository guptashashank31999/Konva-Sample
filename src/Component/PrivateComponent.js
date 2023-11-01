import React from 'react';
import {Outlet, Navigate} from  "react-router-dom"

const PrivateComponent = () => {

    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");

    
  return email && password ? <Outlet /> : <Navigate to="/" />
}

export default PrivateComponent;
