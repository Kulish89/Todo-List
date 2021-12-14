import React from "react";
import "../App.css";
import tasks from "../img/SideBar/Tasks.svg";
function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar__menu">
        <img className="sidebar__menu-img" src={tasks} alt="menu"></img>
      </div>
    </div>
  );
}
export default SideBar;
