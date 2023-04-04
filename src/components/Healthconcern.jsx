import React from "react";
import { Container, Card, Row } from "react-bootstrap";
import lung from "../images/lung.jpg";
import weight from "../images/weight.jpg";
import womencare from "../images/womencare.jpg";
import bonejoint from "../images/bone-joint.jpg";
import temp from "../images/temp.jpg";
import { useNavigate } from "react-router-dom";

const Healthconcern = () => {
  const navigate = useNavigate();

  const handleCares = (name) => {
    navigate("/cares", {
      state: {
        name: name,
      },
    });
  };

  return (
    <Container style={{ marginTop: "30px", marginBottom: "30px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "25px" }}>
        Health Concerns
      </h1>
      <Row>
        {/* Lung Care */}
        <Card
          onClick={() => handleCares("Lung Care")}
          style={{ width: "12rem", marginRight: "40px", cursor: "pointer" }}
          className="d-flex align-items-center"
        >
          <Card.Body>
            <Card.Img
              variant="top"
              src={lung}
              style={{ height: "150px", width: "150px" }}
            />
            <Card.Subtitle
              style={{ textAlign: "center", marginTop: "10px" }}
              className="mb-2 text-muted"
            >
              Lung Care
            </Card.Subtitle>
          </Card.Body>
        </Card>

        {/* Weight Care */}
        <Card
          onClick={() => handleCares("Weight Care")}
          style={{ width: "12rem", marginRight: "40px", cursor: "pointer" }}
          className="d-flex align-items-center"
        >
          <Card.Body>
            <Card.Img
              variant="top"
              src={weight}
              style={{ height: "150px", width: "150px" }}
            />
            <Card.Subtitle
              style={{ textAlign: "center", marginTop: "10px" }}
              className="mb-2 text-muted"
            >
              Weight Care
            </Card.Subtitle>
          </Card.Body>
        </Card>

        {/* Women Care */}
        <Card
          onClick={() => handleCares("Women Care")}
          style={{ width: "12rem", marginRight: "40px", cursor: "pointer" }}
          className="d-flex align-items-center"
        >
          <Card.Body>
            <Card.Img
              variant="top"
              src={womencare}
              style={{ height: "150px", width: "150px" }}
            />
            <Card.Subtitle
              style={{ textAlign: "center", marginTop: "10px" }}
              className="mb-2 text-muted"
            >
              Women Care
            </Card.Subtitle>
          </Card.Body>
        </Card>

        {/* Bone & Joint Pain */}
        <Card
          onClick={() => handleCares("Bone & Joint Pain")}
          style={{ width: "12rem", marginRight: "40px", cursor: "pointer" }}
          className="d-flex align-items-center"
        >
          <Card.Body>
            <Card.Img
              variant="top"
              src={bonejoint}
              style={{ height: "150px", width: "150px" }}
            />
            <Card.Subtitle
              style={{ textAlign: "center", marginTop: "10px" }}
              className="mb-2 text-muted"
            >
              Bone & Joint Pain
            </Card.Subtitle>
          </Card.Body>
        </Card>

        {/* Cold & Fever */}
        <Card
          onClick={() => handleCares("Cold & Fever")}
          style={{ width: "12rem", cursor: "pointer" }}
          className="d-flex align-items-center"
        >
          <Card.Body>
            <Card.Img
              variant="top"
              src={temp}
              style={{ height: "150px", width: "150px" }}
            />
            <Card.Subtitle
              style={{ textAlign: "center", marginTop: "10px" }}
              className="mb-2 text-muted"
            >
              Cold & Fever
            </Card.Subtitle>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default Healthconcern;
