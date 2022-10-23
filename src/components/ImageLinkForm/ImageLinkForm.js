import React from "react";
import './ImageLinkForm.css'

const ImageLinkForm = () => {
  return(
    <div className="">
      <p className="f3 center">
        {'This program will detect faces in your picture. Git it a try!'}
      </p>
      <div className="center">
        <div className="detect-container pa4 br3 shadow-5 center">
          <input className="f4 pa2 w-70 center" type='text'></input>
          <button className="detect-btn">Detect</button>
        </div>
      </div>
    </div>


  )
};

export default ImageLinkForm;