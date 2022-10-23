import React from "react";
import Tilt from 'react-parallax-tilt';
import faceDetection from './faceDetection.png'
import './Logo.css';

const Logo = () => {
  return(
    <div>
      <Tilt className="Tilt" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
        <div className="Tilt-inner">
          <img alt="logo" src={faceDetection}/>
        </div>
      </Tilt>
    </div>
  )
};

export default Logo;