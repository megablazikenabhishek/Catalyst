import "./css/chat.css";

import { React, useEffect } from "react";

import logo from "./imgs/blog.jpg";

const Community_name = "mumbra gang";
const count = 4;
// const USERcount=['jagjeet','abhishek','parth','hamza'];
const room_name = "yellow";

export default function Chat() {
  useEffect(() => {
    const url = "/testing";
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4200/testing/");
        const json = await response.json();
        console.log(json);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="siding">
      <div className="chat-container">
        <header className="chat-header">
          <h1>
            <i className="fas fa-smile"></i>
            <p className="x"> {Community_name} </p>
          </h1>
          <a href="index.html" className="btn">
            {" "}
            Leave Room{" "}
          </a>
        </header>
        <main className="chat-main">
          <div className="chat-sidebar">
            <h3>
              <i className="fas fa-comments"></i>{" "}
              <p className="x">Room Name: {room_name}</p>
            </h3>
            <h2 id="room-name">JavaScript</h2>
            <h3>
              <i className="fas fa-users"></i>{" "}
              <p className="x">UsersCount: {count}</p>
            </h3>
            <ul id="users x">{/* <li className='x'>{count}</li> */}</ul>
          </div>
          <div className="chat-messages">
            <div className="message">
              <div className="full_header">
                <img className="modifier" src={logo} alt="" />
                <p className="meta">
                  Brad<span>12: 34pm </span>
                </p>
              </div>
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi, repudiandae.
              </p>
            </div>
            <div className="message">
              <p className="meta">
                Mary <span>9:15pm</span>
              </p>
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi, repudiandae.
              </p>
            </div>
          </div>
        </main>
        <div className="chat-form-container">
          <form id="chat-form">
            <input
              id="msg"
              type="text"
              placeholder="Enter Message"
              required
              autocomplete="off"
            />
            <button className="btn">
              <i className="fas fa-paper-plane"></i> Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
