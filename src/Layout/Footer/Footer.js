import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="country-row" style={{ padding: "10px" }}>
        <span>Nigeria</span>
      </div>

      <div className="country-row-mobile">
        <div className="country-row-mobile-align">
          <span
            style={{
              marginBottom: "10px",
              marginTop: "10px",
              fontSize: "15px",
              fontWeight: "600",
            }}
          >
            <span style={{ fontSize: "10px" }}>⚫</span> Unknown
          </span>
          <a
            href="/location"
            style={{
              marginBottom: "30px",
              textDecoration: "none",
              fontSize: "14px",
            }}
          >
            Update location
          </a>
        </div>
      </div>

      <div className="info-row">
        <div className="left-col anchor-tag">
          <a href="/advertising">Advertising</a>
          <a href="/business">Business</a>
          <a href="/about">About</a>
          <a href="search">How Search Works</a>
        </div>
        <div className="right-col anchor-tag">
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="/settings">Settings</a>
        </div>
      </div>

      <div className="info-row-mobile">
        <div className="left-col-mobile anchor-tag">
          <a href="/settings">Settings</a>
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
        </div>
        <div className="right-col-mobile anchor-tag">
          <a href="/advertising">Advertising</a>
          <a href="/business">Business</a>
          <a href="/about">About</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
