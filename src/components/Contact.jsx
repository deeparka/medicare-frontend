import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ContactDataService from "../services/contact.service";

function Contact() {
  const navigate = useNavigate();

  const initialMessageDetails = {
    id: null,
    name: "",
    email: "",
    message: "",
  };

  const [messageDetails, setMessageDetails] = useState(initialMessageDetails);

  const [submitted, setSubmitted] = useState(false);

  const token = sessionStorage.getItem("token");

  if (!token) {
    // Redirect to the login page
    navigate("/login");
  }

  function handleFormChange(event) {
    const { name, value } = event.target;
    setMessageDetails({ ...messageDetails, [name]: value });

    // console.log(messageDetails);
  }

  function handleSubmit(event) {
    event.preventDefault();

    let data = {
      name: messageDetails.name,
      email: messageDetails.email,
      message: messageDetails.message,
    };

    ContactDataService.create(data)
      .then((response) => {
        setSubmitted(true);
        setMessageDetails({
          id: response.data.id,
          name: response.data.name,
          email: response.data.email,
          message: response.data.message,
        });
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <div className="Auth-form-container">
      {submitted ? (
        <div>
          <h2>Message successfully sent</h2>
          <h4 style={{ textAlign: "center" }}>
            We will contact you shortly
          </h4>
        </div>
      ) : (
        <form className="Auth-form" onSubmit={handleSubmit}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Contact us</h3>
            <div className="form-group mt-3">
              <label>Full Name</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="e.g John Doe"
                onChange={handleFormChange}
                required
                name="name"
              />
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="johndoe@gmail.com"
                onChange={handleFormChange}
                required
                name="email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Meassage</label>
              <textarea
                rows={5}
                className="form-control mt-1"
                placeholder="Enter your message"
                onChange={handleFormChange}
                required
                name="message"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Send
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}

export default Contact;
