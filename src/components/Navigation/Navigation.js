import React from "react";
import './Navigation.css'

const Navigation = ({ isSignin, onRouteChange }) => {
  if(isSignin) {
    return(
      <nav className="nav">
      <p onClick={() => onRouteChange('signout')}>Sign Out</p>
    </nav>
    )
  } else {
    return(
      <nav className="nav">
        <p onClick={() => onRouteChange('signin')}>Sign In</p>
        <p onClick={() => onRouteChange('register')}>Register</p>
      </nav>
    )
  }
  
};

export default Navigation;