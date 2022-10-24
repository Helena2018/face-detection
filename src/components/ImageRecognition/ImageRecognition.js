import React from "react";

const ImageRecognition = ({imgUrl}) => {
  return(
    <div className="center">
      <div className="absolute ma2">
        <img alt="" src={imgUrl} width='500px' height='auto' />
      </div>
    </div>
  )
};

export default ImageRecognition;