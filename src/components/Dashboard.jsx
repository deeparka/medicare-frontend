import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import medimg2 from "../images/medicare10.jpg";
import MedicineDataService from "../services/medicine.service";

function Dashboard() {
  const [medicines, setMedicines] = useState([]);

  MedicineDataService.getAll().then((response) => {
    setMedicines(response.data);
    // console.log(response.data);
  });

  return (
    <Container style={{ marginTop: "30px", marginBottom: "30px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "15px" }}>Here are some available medicines on our site</h1>
      <Row className="gy-5">
        {medicines.map((med) => (
          <Col>
            <div class="card" style={{ width: "20rem" }}>
              <img src={medimg2} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">{med.name}</h5>
                <p className="card-text">Category: {med.category}</p>
                <p className="card-text">Price: ₹{med.price} per unit</p>
                <p class="card-text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ullam repellendus in et, doloribus accusantium cumque officiis
                  saepe porro? Reiciendis ut, voluptates sunt doloremque
                  consequatur vero culpa maiores modi et saepe!
                </p>
                <a href="first.html" class="btn btn-primary">
                  Add to cart
                </a>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Dashboard;
