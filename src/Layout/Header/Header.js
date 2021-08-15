import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-desktop">
        <a href="/gmail">Gmail</a>
        <a href="/images">Images</a>
      </div>

      <div className="right">
        <div className="hamburger">
          <span className="line-1"></span>
          <span className="line-2"></span>
          <span className="line-3"></span>
        </div>
      </div>

      <div className="header-mobile">
        <a href="/gmail">All</a>
        <a href="/images">Images</a>
      </div>

      <div className="square">
        <i className="fas fa-th"></i>
      </div>
      <div className="profile-container"></div>
    </div>
  );
};

export default Header;
