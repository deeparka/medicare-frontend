import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import medimg from "../images/medicare-appointment.jpg";
import AppointmentsDataService from "../services/appointments.service";
import { useNavigate } from "react-router-dom";

function Appointments() {
  const navigate = useNavigate();

  const token = sessionStorage.getItem("token");
  
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    if (!token) {
      // Redirect to the login page
      navigate("/login");
    }
  }, [navigate, token]);

  AppointmentsDataService.getAll().then((response) => {
    setAppointments(response.data);
    // console.log(response.data);
  });

  const handleBook = (category) => {
    console.log(category)
    navigate("/appointmentform", {
      state: {
        category: category,
      },
    });
  };

  return (
    <Container style={{ marginTop: "90px", marginBottom: "30px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "25px" }}>
        Appointments available
      </h1>
      <Row className="gy-5">
        {appointments.map((apt) => (
          <Col key={apt.id}>
            <div className="card" style={{ width: "20rem" }}>
              <img src={medimg} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{apt.category}</h5>
                <p className="card-text">{apt.availability}</p>
                <p className="card-text">₹{apt.price}</p>
                <button
                  onClick={() => handleBook(apt.category)}
                  className="btn btn-primary"
                >
                  Book appointment
                </button>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Appointments;
