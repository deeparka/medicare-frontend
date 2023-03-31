import React, { useState } from "react";
import { Link } from "react-router-dom";
import UserDataService from "../services/user.service";

function SignUp() {
  const initialUserState = {
    id: null,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const [user, setUser] = useState(initialUserState);
  const [submitted, setSubmitted] = useState(false);

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  function handleSignUp() {
    let data = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
    };

    UserDataService.create(data)
    .then((response) => {
        setSubmitted(true);
        setUser({
          id: response.data.id,
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          email: response.data.email,
          password: response.data.password,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <div className="Auth-form-container">
      {submitted ? (
        <div>
          <h2>You have successfully registered</h2>
          <h4>
            Now <Link to="/login">Log in</Link>
          </h4>
        </div>
      ) : (
        <form className="Auth-form" onSubmit={handleSignUp}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign Up</h3>
            <div className="text-center">
              Already registered?{" "}
              <Link to="/login">
                <span className="link-primary" style={{ cursor: "pointer" }}>
                  Log In
                </span>
              </Link>
            </div>
            <div className="form-group mt-3">
              <label>First Name</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="John"
                onChange={handleFormChange}
                name="firstName"
              />
            </div>
            <div className="form-group mt-3">
              <label>Last Name</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Doe"
                onChange={handleFormChange}
                name="lastName"
              />
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="johndoe@gmail.com"
                onChange={handleFormChange}
                name="email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                onChange={handleFormChange}
                name="password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Sign Up
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}

export default SignUp;
