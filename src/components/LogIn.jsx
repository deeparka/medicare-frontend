import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserDataService from "../services/user.service";
import AppContext from "../context/AppContext";
import { Spinner } from "react-bootstrap";

function LogIn() {
  const useValue = useContext(AppContext);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const [userType, setUserType] = useState("");

  const [submitted, setSubmitted] = useState(false);

  const initialCredentialsState = {
    email: "",
    password: "",
  };

  const [credentials, setCredentials] = useState(initialCredentialsState);

  function handleFormChange(event) {
    UserDataService.get(credentials.email).then((response) => {
      // console.log(response.data);

      setUserType(response.data.userType);

      setFirstName(response.data.firstName);
      setLastName(response.data.lastName);

      setEmail(response.data.email);
      setPassword(response.data.password);
    });

    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
    // console.log(credentials);
  }

  function handleLogin(event) {
    setEmailError(false);
    setPassword(false);
    event.preventDefault();

    if (email !== credentials.email) {
      setEmailError(true);
    }

    if (password !== credentials.password) {
      setPasswordError(true);
    }

    setSubmitted(true);

    if (credentials.email === email && credentials.password === password) {
      sessionStorage.setItem("token", credentials);
    } else {
      alert("Invalid credentials");
      setSubmitted(false);
      window.location.reload();
    }

    useValue.defineUserType(userType);
  }

  return (
    <div className="Auth-form-container">
      {submitted ? (
        <div style={{ textAlign: "center" }}>
          <h2>Log in successful</h2>
          <h3>
            Welcome {firstName} {lastName}
          </h3>
          <h4>
            Go to <Link to="/">Homepage</Link>
          </h4>
        </div>
      ) : (
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
              {emailError && (
                <p style={{ color: "red" }}>*Incorrect or Invalid Email</p>
              )}
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
              {passwordError && (
                <p style={{ color: "red" }}>*Incorrect Password</p>
              )}
            </div>
            <div className="d-grid gap-2 mt-3">
              {!emailError && !passwordError && (
                <button type="submit" className="btn btn-primary">
                  Log in
                </button>
              )}
              {((emailError && passwordError) ||
                passwordError ||
                emailError) && (
                <button disabled type="submit" className="btn btn-primary">
                  Log in
                </button>
              )}
            </div>
          </div>
        </form>
      )}
    </div>
  );
}

export default LogIn;
