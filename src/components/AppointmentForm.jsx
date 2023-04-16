import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const AppointmentForm = () => {
  const location = useLocation();
  const { category } = location.state;

  const [show, setShow] = useState(false);

  const initialDetails = {
    name: "",
    email: "",
    phone: "",
  };

  const [userDetails, setUserDetails] = useState(initialDetails);

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShow(true);
  };

  const handleClose = () => setShow(false);

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Schedule Appointment</h3>
          <div className="form-group mt-3">
            <label>Full Name*</label>
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
            <label>Email address*</label>
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
            <label>Phone Number*</label>
            <input
              type="tel"
              className="form-control mt-1"
              placeholder="Enter your number"
              onChange={handleFormChange}
              required
              name="phone"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Book
            </button>
          </div>
        </div>
      </form>

      {/* If Book appointment is clicked then this modal will pop-up */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Appointment booked</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Hi {userDetails.name}, your appointment is booked for {category}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AppointmentForm;
