import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div>
      <h1> Page Not Found</h1>
      <Link to="/"> Get back Home</Link>
    </div>
  );
};

export default PageNotFound;
