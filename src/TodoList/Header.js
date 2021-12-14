import React from "react";
import "../App.css";
import logo from "../img/Header/logo.svg";
import user from "../img/Header/user-icon.svg";
import arrow from "../img/Header/arrow.svg";

function Header() {
  return (
    <header className="header">
      <div className="header__left-Section left-Section">
        <a className="left-Section__logo" href="https://google.com">
          <img className="left-Section__logo-img" alt="" src={logo}></img>
          <span className="left-Section__logo-text">To-Do</span>
        </a>
        <h1 className="left-Section__title">Tasks</h1>
      </div>

      <div className="header__user user">
        <div className="user-data">
          <span className="user-name">Leanne Graham</span>

          <img className="user-icon" alt="" src={user}></img>
          <button className="user-arrow">
            <img alt="" src={arrow}></img>
          </button>
        </div>
      </div>
    </header>
  );
}
export default Header;
