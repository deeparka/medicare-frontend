import React, { useContext, useState } from "react";
import WellnessDataService from "../services/wellness.service";
import wellnessimg from "../images/wellness.jpg";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AppContext from "../context/AppContext";

const Wellness = () => {
  const useValue = useContext(AppContext);

  const navigate = useNavigate();

  const token = sessionStorage.getItem("token");

  if (!token) {
    // Redirect to the login page
    navigate("/login");
  }

  const [wellness, setWellness] = useState([]);

  WellnessDataService.getAll().then((response) => {
    setWellness(response.data);
    // console.log(response.data);
  });

  const handleAddToCart = (well) => {
    if (useValue.cartItems.some((item) => item.name === well.name)) {
      alert("Already added to cart");
    } else {
      useValue.addItemsToCart(well);
      alert("Added to cart");
    }

    // console.log(useValue.cartItems);
  };

  return (
    <Container style={{ marginTop: "90px", marginBottom: "30px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "25px" }}>
        Wellness Products
      </h1>

      <Row className="gy-5">
        {wellness.map((well) => (
          <Col key={well.id}>
            <div className="card" style={{ width: "20rem" }} >
              <img src={wellnessimg} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{well.name}</h5>
                <p className="card-text">{well.company}</p>
                <p className="card-text">₹{well.price}</p>
                <button className="btn btn-primary" onClick={(e) => {
                  e.preventDefault();
                  handleAddToCart(well);
                }}>Add to cart</button>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Wellness;
