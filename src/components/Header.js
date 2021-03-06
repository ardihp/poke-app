import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import "../styles/Header.scss";

function Header() {
  return (
    <div className="header">
      <div className="header-content">
        <Link to="/">
          <img src={Logo} alt="logo pokemon" className="logo" />
        </Link>
        <Link to="/my-pokemon" className="header-link">
          <i className="icon fas fa-briefcase" />
        </Link>
      </div>
    </div>
  );
}

export default Header;
