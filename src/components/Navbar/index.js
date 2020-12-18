import React from "react";
import "./style.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo"></div>
      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
}

export default Navbar;
