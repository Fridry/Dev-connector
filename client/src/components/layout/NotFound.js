import React, { Fragment } from "react";

const NotFound = () => {
  return (
    <div>
      <h1 className="x-large text-primary">
        <i className="fas fa-exclamation-triangle"></i>Page Not Found
      </h1>
      <p className="large">Sorry, this page does not exists.</p>
    </div>
  );
};

export default NotFound;
