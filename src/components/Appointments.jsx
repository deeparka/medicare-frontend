import React, { useState } from "react";
import { Col, Container, Row, Modal, Button } from "react-bootstrap";
import medimg2 from "../images/medicare10.jpg";
import AppointmentsDataService from "../services/appointments.service";

function Appointments() {

  const [category, setCategory] = useState("");
  const [show, setShow] = useState(false);
  const [appointments, setAppointments] = useState([]);

  AppointmentsDataService.getAll().then((response) => {
    setAppointments(response.data);
    // console.log(response.data);
  });

  const handleBook = (category) => {
    setCategory(category);
    setShow(true);
  }

  const handleClose = () => setShow(false);

  return (
    <Container style={{ marginTop: "30px", marginBottom: "30px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "25px" }}>Appointments available</h1>
      <Row className="gy-5">
        {appointments.map((apt) => (
          <Col>
            <div class="card" style={{ width: "20rem" }} key={apt.id}>
              <img src={medimg2} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">{apt.category}</h5>
                <p className="card-text">{apt.availability}</p>
                <p className="card-text">₹{apt.price}</p>
                <button onClick={() => handleBook(apt.category)} class="btn btn-primary">
                  Book appointment
                </button>
              </div>
            </div>
          </Col>
        ))}
      </Row>

      {/* If Book appointment is clicked then this modal will pop-up */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Appointment booked</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo! your appointment is booked for {category}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Appointments;
