import React from "react";
import { Container, Col, Row, Image } from "react-bootstrap";
import "./Why.css";
import woman from "../../extra/images/1d2f300262cd4024761109c6556a77b14a7ad2dd.png";

const Why = () => {
  return (
    <>
      <Container>
        <Row className="home2">
          <Col md={{ span: 5 }}>
            <h1 className="tilt">Why us ?</h1>
          </Col>
          <Col md={{ span: 7 }}>
            <Image className="img-resize" src={woman} alt="woman" />
          </Col>
        </Row>

        <Row className="home2">
          <Col md={{ span: 5, offset: 5 }}>
            <p>
              You should "listen to my mixtape" (check out the rest of my
              portfolio). Smiling could easily be misinterpreted for showing
              your teeth to someone because they said something that made you
              happy. Most streets are two-way streets...why does that make love
              so special?.
            </p>
          </Col>
          <Col xs={1}>
            <p>Something</p>
          </Col>
        </Row>
        <Row className="home2 text-fix-center">
          <Col md={{ span: 6 }}>
            <h4>
              
              You should "listen to my mixtape" (check out the rest of my
              portfolio). You should "listen to my mixtape" (check out the rest
              of my portfolio).{" "}
            </h4>
            <p>
              You should "listen to my mixtape" (check out the rest of my
              portfolio).
            </p>
          </Col>
          <Col md={{ span: 6 }}>
            <h4>
              
              You should "listen to my mixtape" (check out the rest of my
              portfolio). You should "listen to my mixtape" (check out the rest
              of my portfolio).{" "}
            </h4>
            <p>
              You should "listen to my mixtape" (check out the rest of my
              portfolio).
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Why;
