import React from "react";
import './ImageRecognition.css';

const ImageRecognition = ({imgUrl, box}) => {
  return(
    <div className="center">
      <div className="absolute ma2">
        <img id="inputImage" alt="" src={imgUrl} width='500px' height='auto' />
        <div className="bounding-box" style={{top: box.topRow, right: box.rightCol, bottom: box.bottonRow, left: box.leftCol}}></div>
      </div>
    </div>
  )
};

export default ImageRecognition;