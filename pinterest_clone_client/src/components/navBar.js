import React from "react";
import logo from "../images/transparent-pinterest-icon.png";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <ul id="nav">
        <img
          alt={logo}
          src={logo}
          style={{
            float: "left",
            width: "60px",
            height: "60px",
            paddingTop: "10px",
          }}
        />
        <h1 style={{ color: "#E60023" }}>
          Clone
          <li>
            <NavLink exact to="/pins">
              {" "}
              My Pins{" "}
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/about-app">
              {" "}
              About{" "}
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/">
              {" "}
              Home{" "}
            </NavLink>
          </li>
        </h1>
      </ul>
    </div>
  );
};

export default NavBar;
