import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import girlOnSofa from "../../extra/images/87c9facb5a88bfe795344e35b22fd9db8c75d045.png";

import "./Home.css";
import Contact from "../Contact/Contact";
import Sweet from "../Sweet/Sweet";
import Difference from "../Difference/Difference";

const Home = () => {
  return (
    <>
      <Container xs={12}>
        <Row className="home1">
          <Col>
            <Image className="img-resize" src={girlOnSofa} alt="girlOnSofa" />
          </Col>
        </Row>
        <Row className="home1">
          <Col>
            <h2>Make yourself at home</h2>
          </Col>
        </Row>

        <Sweet />

        <Difference />
      </Container>
      <Contact />
    </>
  );
};

export default Home;
