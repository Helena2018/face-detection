import React from "react";

const Rank = ({ name, entries }) => {
  return (
    <div className="f3 fw6 white">
      <div>
        {`Hello ${name}, your current entry is...`}
      </div>
      <div className="f2 fw4 white">
        {entries}
      </div>
    </div>
  )
};

export default Rank;