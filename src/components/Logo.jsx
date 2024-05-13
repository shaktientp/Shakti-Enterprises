import React from "react";
import { Link } from "react-router-dom";

function Logo({ width = "100px" }) {
  return (
    <div className="logo-container">
      <Link to="/">
        <img src="logo.png" alt="Shakti Enterprise" className="logo" />
      </Link>
    </div>
  );
}

export default Logo;
