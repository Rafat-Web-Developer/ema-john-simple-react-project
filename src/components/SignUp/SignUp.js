import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);

  const navigate = useNavigate();
  if (user) {
    navigate("/shop");
  }

  const handleEmailField = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordField = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordField = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage("Confirm password not matched!!");
      return;
    }
    if (password.length < 6) {
      setErrorMessage("Password must have 6 characters.");
      return;
    }
    setErrorMessage("");
    createUserWithEmailAndPassword(email, password);
  };

  return (
    <div className="form-container">
      <h1 className="form-header">Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input onBlur={handleEmailField} type="email" name="email" />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input onBlur={handlePasswordField} type="password" name="password" />
        </div>
        <div className="input-group">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            onBlur={handleConfirmPasswordField}
            type="password"
            name="confirm-password"
          />
        </div>
        <p style={{ color: "red" }}>{errorMessage}</p>
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
