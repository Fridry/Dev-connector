import React from "react";
import { PongSpinner } from "react-spinners-kit";

const Spinner = () => {
  return (
    <div
      style={{
        marginLeft: "50%",
        display: "block",
      }}
    >
      <PongSpinner color="#17a2b8" />
    </div>
  );
};

export default Spinner;
