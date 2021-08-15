import React, { useState } from "react";
import Google from "../../Images/google.png";
import { FaSearch } from "react-icons/fa";
import "./MainBody.css";

const MainBody = () => {
  const url = process.env.REACT_APP_GOOGLE_URL;
  const perfectEngineering = process.env.REACT_APP_ENG_LINK;

  const [usersText, setUsersText] = useState("");

  return (
    <div className="main-body">
      <div className="main-body-wrapper">
        <img src={Google} alt="" height="92" width="272" id="logo" />
        <div id="search">
          <FaSearch id="search-icon" />
          <input
            type="text"
            name="usersText"
            onChange={(e) => setUsersText(e.target.value)}
          />
        </div>

        <div className="main-btn">
          {usersText === "" ? (
            <button>Google Search</button>
          ) : (
            <a href={`${url}${usersText}`}>
              <button>Google Search</button>
            </a>
          )}

          <a href={`${perfectEngineering}`}>
            <button>I'm Feeling Lucky</button>
          </a>
        </div>
        <div className="language-links">
          Google is offered in:
          <a href="/nope"> English</a>
          <a href="/nope"> Yoruba</a>
          <a href="/nope"> Pidgin</a>
        </div>
      </div>
    </div>
  );
};

export default MainBody;
