import React, { useState } from 'react'
import WellnessDataService from "../services/wellness.service"
import wellnessimg from "../images/wellness.jpg";
import { Col, Container, Row } from 'react-bootstrap';

const Wellness = () => {

    const [wellness, setWellness] = useState([]);

    WellnessDataService.getAll().then(response => {
        setWellness(response.data);
        console.log(response.data);
    })

  return (
    <Container style={{ marginTop: "30px", marginBottom: "30px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "25px" }}>
        Wellness Products
      </h1>

      <Row className="gy-5">
        {wellness.map((well) => (
          <Col>
            <div class="card" style={{ width: "20rem" }} key={well.id}>
              <img src={wellnessimg} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">{well.name}</h5>
                <p className="card-text">{well.company}</p>
                <p className="card-text">₹{well.price}</p>
                <button class="btn btn-primary">
                  Add to cart
                </button>
              </div>
            </div>
          </Col>
        ))}
      </Row>

      </Container>
  )
}

export default Wellness