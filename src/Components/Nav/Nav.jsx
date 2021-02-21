import React, { useEffect, useState } from "react";
import logo from "../../Photos/netflix-logo.png";
import avatar from "../../Photos/Netflix-avatar.png";
import "./Nav_Style/Nav.css";
import { useHistory } from "react-router-dom";

function Nav() {
  const history = useHistory();
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) handleShow(true);
    else handleShow(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          onClick={() => history.push("/")}
          className="nav__logo"
          src={logo}
          alt="Netflix"
        />
        <img
          onClick={() => history.push("/profile")}
          className="nav__avatar"
          src={avatar}
          alt="avatar"
        />
      </div>
    </div>
  );
}

export default Nav;
