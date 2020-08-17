import React, { Component } from "react";

// Stateless functional Component + props destructering

const Navbar = ({ totalCounters }) => {
  return (
    <nav className="grey lighten-3 ">
      <div className="nav-wrapper" style={{ paddingLeft: "16px" }}>
        <a href="#!" className="brand-logo left grey-text text-darken-3">
          Cart{" "}
          <span
            className="new badge blue"
            style={{ marginTop: "24px", fontWeight: "700" }}
            data-badge-caption=""
          >
            {totalCounters}
          </span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
