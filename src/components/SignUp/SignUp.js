import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="form-container">
      <h1 className="form-header">Sign Up</h1>
      <form>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
        </div>
        <div className="input-group">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input type="password" name="confirm-password" />
        </div>
        <input type="submit" value="Sign Up" className="form-btn" />
        <p className="form-link-text">
          Already have an account{" "}
          <Link className="form-link" to="/login">
            Login
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

export default SignUp;
