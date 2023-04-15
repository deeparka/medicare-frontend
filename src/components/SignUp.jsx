import React, { useState } from "react";
import { Link } from "react-router-dom";
import UserDataService from "../services/user.service";
import { useEffect } from "react";

function SignUp() {
  const initialUserState = {
    id: null,
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    userType: "user",
  };

  const [allUsers, setAllUsers] = useState([]);
  const [user, setUser] = useState(initialUserState);
  const [submitted, setSubmitted] = useState(false);

  const [emailError, setEmailError] = useState(false);

  useEffect(() => {
    UserDataService.getAll().then((response) => {
      setAllUsers(response.data);
    });
  }, []);

  const handleFormChange = (event) => {
    setEmailError(false);
    allUsers.map((singleUser) => {
      if (singleUser.email === user.email) {
        setEmailError(true);
      }
    });

    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
    // console.log(user);
  };

  function handleSignUp(event) {
    event.preventDefault();
    let data = {
      firstName: user.firstName,
      lastName: user.lastName,
      phone: user.phone,
      email: user.email,
      password: user.password,
      userType: "user",
    };

    UserDataService.create(data)
      .then((response) => {
        setSubmitted(true);
        setUser({
          id: response.data.id,
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          phone: response.data.phone,
          email: response.data.email,
          password: response.data.password,
        });
        // console.log(response.data);
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
          <h4 style={{ textAlign: "center" }}>
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
                required
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
                required
              />
            </div>
            <div className="form-group mt-3">
              <label>Phone Number</label>
              <input
                type="number"
                className="form-control mt-1"
                placeholder="Phone Number"
                onChange={handleFormChange}
                name="phone"
                required
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
                required
              />
            </div>
            {emailError && (
              <p style={{ color: "red" }}>*Email already exists</p>
            )}
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                onChange={handleFormChange}
                name="password"
                required
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              {!emailError && (
                <button type="submit" className="btn btn-primary">
                  Sign Up
                </button>
              )}
              {emailError && (
                <button disabled type="submit" className="btn btn-primary">
                  Sign Up
                </button>
              )}
            </div>
          </div>
        </form>
      )}
    </div>
  );
}

export default SignUp;
