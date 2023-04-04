import React, { useState } from "react";
import { Link } from "react-router-dom";
import UserDataService from "../services/user.service";

function LogIn() {

  const initialState = {
    email: "",
    password: ""
  }

  const [credentials, setCredentials] = useState(initialState);

  function handleFormChange(event) {
    const { name, value } = event.target;
    setCredentials({ ...initialState, [name]: value })
  }

  function handleLogin(event) {
    event.preventDefault();

    // UserDataService.get(email).then((response) => {
    //   console.log(response.data);
    // });
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleLogin}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Welcome to MediCare</h3>
          <div className="text-center">
            Not registered yet?{" "}
            <Link to="/signup">
              <span className="link-primary" style={{ cursor: "pointer" }}>
                Sign Up
              </span>
            </Link>
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="johndoe@gmail.com"
              required
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
              required
              onChange={handleFormChange}
              name="password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Log in
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LogIn;
