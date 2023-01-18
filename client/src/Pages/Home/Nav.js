import React from "react";
import logo from "../../logo.png";
import "./css/nav.css";
import user from "./imgs/user.png";
import gear from "./imgs/gear.png";
import search from "./imgs/search.png";
import cross from "./imgs/cross.png"

export default function Nav() {
  return (
    <nav className="nav">
      <div className="company">
        <img className="img" src={logo} alt="" />
        <h1>Catalyst</h1>
      </div>
      <ul className="list">
        <div className="searchbar">
          <img className="searchimg" id="searchimg" src={search} alt="" />
          <img src={cross} id="cross" alt="" />
          <input id="search" className="search" type="text" />
        </div>
        <img className="icon" src={user} alt="" />
        <img className="icon" src={gear}></img>
      </ul>
    </nav>
  );
}