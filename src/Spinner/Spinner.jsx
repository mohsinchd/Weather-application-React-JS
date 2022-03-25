import React from "react";
import spinner from "./spinner.gif";
const Spinner = () => {
  return (
    <div className="spinner">
      <img
        src={spinner}
        style={{
          width: 150,
          margin: "auto",
          display: "block",
        }}
      />
    </div>
  );
};

export default Spinner;
