import React from "react";

const ImageRecognition = ({imgUrl}) => {
  return(
    <div className="center ma2">
      <img alt="" src={imgUrl}width='500px' height='auto' />
    </div>
  )
};

export default ImageRecognition;