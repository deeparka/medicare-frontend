import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import medimg2 from "../images/medicare10.jpg";
import AppointmentsDataService from "../services/appointments.service";

function Appointments() {
  const [appointments, setAppointments] = useState([]);

  AppointmentsDataService.getAll().then((response) => {
    setAppointments(response.data);
    console.log(response.data);
  });

  return (
    <Container style={{ marginTop: "30px", marginBottom: "30px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "15px" }}>Appointments available</h1>
      <Row className="gy-5">
        {appointments.map((apt) => (
          <Col>
            <div class="card" style={{ width: "20rem" }} key={apt.id}>
              <img src={medimg2} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">{apt.category}</h5>
                <p className="card-text">{apt.availability}</p>
                <p className="card-text">₹{apt.price}</p>
                <a href="#" class="btn btn-primary">
                  Book appointment
                </a>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Appointments;
