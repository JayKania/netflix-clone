import React from "react";
import navLogo from "../assets/Netflix-Logo.svg";
import "../styles/_nav.scss";
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
        <button>Sign In</button>
      </div>
    </nav>
  );
};

export default Nav;
