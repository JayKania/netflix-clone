import React from "react";
import { Link } from "react-router-dom";
import navLogo from "../assets/Netflix-Logo.svg";

const Nav = () => {
  return (
    <nav>
      <div className="flex-item">
        <a href="/">
          <img src={navLogo} alt="" />
        </a>
      </div>
      <div className="language-signin flex-item">
        <span className="language">English</span>
        <Link to="/login">
          <button>Sign In</button>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
