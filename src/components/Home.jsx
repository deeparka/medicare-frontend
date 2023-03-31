import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import med from "../images/medicare.jpg";
import offer1 from "../images/offer1.jpg";
import offer2 from "../images/offer2.jpg";
import offer3 from "../images/offer3.jpg";
import offer4 from "../images/offer4.jpg";

function Home() {
  return (
    <div>
      <Container>
        <Row>
          <h1 id="homeHead">We Provide High Solutions for Your Health</h1>
          <img src={med} alt="" id="homeMedImg" />
        </Row>
        <hr class="hr" />
        <br />
        <Row>
          <h2 style={{ marginBottom: "10px" }}>Special offer</h2>
        </Row>
        <Row>
          <img src={offer1} alt="" id="homeMedImg" />
        </Row>
        <hr class="hr" />
        <br />
        <Row>
          <h2 style={{ marginBottom: "10px" }}>Offers just for you</h2>
        </Row>
        <Row>
          <img src={offer2} alt="" id="homeMedImg" />
        </Row>
        <hr class="hr" />
        <br />
        <Row>
          <h2 style={{ marginBottom: "10px" }}>
            Grab maximum savings on medicines here
          </h2>
        </Row>
        <Row>
          <Col>
            <img src={offer3} alt="" id="homeMedImg" className="offerImg" />
          </Col>
          <Col>
            <img src={offer4} alt="" id="homeMedImg" className="offerImg" />
          </Col>
        </Row>
        <Row>
          <h3>App coming soon...</h3>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
