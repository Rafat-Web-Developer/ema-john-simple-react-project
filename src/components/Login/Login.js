import React from "react";
import { Link } from "react-router-dom";
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
        <p className="form-link-text">
          Create a new account{" "}
          <Link className="form-link" to="/signup">
            Sign Up
          </Link>
        </p>
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
