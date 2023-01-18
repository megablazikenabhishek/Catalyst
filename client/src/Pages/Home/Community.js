import React from "react";
import video from "./imgs/video.png";
import mic from "./imgs/mic.png"
import "./css/community.css";

export default function Community() {
  return (
    <div className="commcontainer">
      <div className="videochat">
        <h2>Video Chats</h2>
        <ul>
          <li>
            <img className="vid" src={video} alt="" />
            <p>vc1</p>
          </li>
          <li>
            <img className="vid" src={video} alt="" />
            <p>vc2</p>
          </li>
          <li>
            <img className="vid" src={video} alt="" />
            <p>vc3</p>
          </li>
          <li>
            <img className="vid" src={video} alt="" />
            <p>vc4</p>
          </li>
        </ul>
      </div>

      <div className="videochat">
        <h2>Chat Rooms</h2>
        <ul>
          <li>
            <img className="vid" src={mic} alt="" />
            <p>tc1</p>
          </li>
          <li>
            <img className="vid" src={mic} alt="" />
            <p>tc2</p>
          </li>
          <li>
            <img className="vid" src={mic} alt="" />
            <p>tc3</p>
          </li>
          <li>
            <img className="vid" src={mic} alt="" />
            <p>tc4</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
