import React from "react";

const Rank = ({ name, entries }) => {
  return (
    <div className="f3 white">
      <div>
        {`Hello ${name}, your current entry is...`}
      </div>
      <div className="f1 white">
        {entries}
      </div>
    </div>
  )
};

export default Rank;