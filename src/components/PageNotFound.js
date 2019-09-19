import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => (
  <div className="jumbotron">
    <h1><strong>404</strong><b>ooops page not found</b></h1>
    <Link to="/" className="btn btn-primary btn-lg">
      Go to homepage
    </Link>
  </div>
);
export default PageNotFound;
