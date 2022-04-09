import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="form-container">
      <h1 className="form-header">Login</h1>
      <form>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
        </div>
        <input type="submit" value="Login" className="form-btn" />
        <div className="orDiv">
          <div className="line"></div>
          <p className="orText">or</p>
          <div className="line"></div>
        </div>
        <button type="button" className="form-btn">
          Google
        </button>
      </form>
    </div>
  );
};

export default Login;
