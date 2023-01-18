import "./signup.css";

import React from "react";

const Signup = () => {
  return (
    <>
      <div className="main_container">
        <div className="container">
          <form>
            <h1>Signup Form</h1>
            <div className="ui divider"></div>
            <div className="ui form">
              <div className="field">
                <label>Username</label>
                <input type="text" name="username" placeholder="Username" />
              </div>
              <div className="field">
                <label>Email</label>
                <input type="text" name="email" placeholder="Email" />
              </div>
              <div className="field">
                <label>Password</label>
                <input type="password" name="password" placeholder="Password" />
              </div>
              <div className="buttons">
                <a href="../Signup/signup.js">
                  <button className="btn">Submit</button>
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
