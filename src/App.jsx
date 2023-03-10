import React from "react";
import fb from "./assets/facebook.png";
import google from "./assets/google.png";
import twitter from "./assets/twitter.png";

const App = () => {
  return (
    <React.Fragment>
      <div className="container">
        <h1 className="login-heading">Login</h1>
        <div className="form-main">
          <h2 className="input-title">Username</h2>
          <input
            type="text"
            className="input-username"
            placeholder="Type your username"
          />
          <h2 className="input-title">Password</h2>
          <input
            type="password"
            className="input-password"
            placeholder="Type your password"
          />
        </div>
        <p className="password-forget">
          <a href="#">Forgot password ?</a>
        </p>
        <button className="login-btn">LOGIN</button>
        <p className="alter-sign-up">Or sign up with</p>
        <div className="alternative">
          <img src={fb} alt="" />
          <img src={twitter} alt="" />
          <img src={google} alt="" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
