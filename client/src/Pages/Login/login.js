import "./login.css"

import React from 'react';

const Login = () => {
    return (
<>
<div className="main_container">
{/* <div className="login_box"> */}
<div className="flex-container">
  <div className="content-container">
    <div className="form-container">
      <form>
        <h1>
          Login
        </h1>
        <br/><br/>
        <span class="subtitle">USERNAME:</span>
        <br/>
        <input type="text" name="username" />
        <br/>
        <span class="subtitle">PASSWORD:</span>
        <br/>
        <input type="password" name="password"/>
        <br/><br/>
        <input type="submit" value="SUBMIT" class="submit-btn"/>
      </form>
    </div>
  </div>
</div>
    
            </div> 
 {/* </div> */
} < />
    );
}

export default Login;
