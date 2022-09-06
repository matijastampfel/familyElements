import React from "react";
import { Container, Col, Row, Image } from "react-bootstrap";
import "./Sweet.css";

import peopleEating from "../../extra/images/60f2d7a65bdc1ed49218185ebabc8c4d74c1109f.png";

const Sweet = () => {
  return (
    <>
      <Container>
        <Row className="home2">
          <Col md={{ span: 5 }}>
            <h1>
              Sweet, <br /> sweet <br /> homes
            </h1>
          </Col>
          <Col md={{ span: 7 }}>
            <Image
              className="img-resize-people"
              src={peopleEating}
              alt="peopleEating"
            />
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
          <Col xs={2}>
            <p>Something something</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Sweet;
