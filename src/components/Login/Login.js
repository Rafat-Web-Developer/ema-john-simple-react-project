import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import "./Login.css";
import auth from "../../firebase.init";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();

  if (user) {
    navigate("/shop");
  }

  const handleEmailField = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordField = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  return (
    <div className="form-container">
      <h1 className="form-header">Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input onBlur={handleEmailField} type="email" name="email" />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input onBlur={handlePasswordField} type="password" name="password" />
        </div>
        {loading && <p style={{ color: "blue" }}>Loading...</p>}
        <p style={{ color: "red" }}>{error?.message}</p>
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
