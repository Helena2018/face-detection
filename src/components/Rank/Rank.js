import React from "react";

const Rank = ({ name, entrices }) => {
  console.log(name, entrices)
  return (
    <div className="f3 white">
      <div>
        {`Hello ${name}, your current rank is...`}
      </div>
      <div className="f1 white">
        {entrices}
      </div>
    </div>
  )
};

export default Rank;