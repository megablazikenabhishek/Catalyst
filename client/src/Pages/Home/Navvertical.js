import "./css/navvertical.css";

import React from "react";

import comm from "./imgs/blog.jpg";

export default function Navvertical() {
  return (
    <div className="container">
      <img class="comm" src={comm} alt="" />
      <img class="comm" src={comm} alt="" />
      <img class="comm" src={comm} alt="" />
      <img class="comm" src={comm} alt="" />
      <img class="comm" src={comm} alt="" />
      <img class="comm" src={comm} alt="" />
    </div>
  );
}
