import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import chair from "../../extra/images/f9fe369f003dfcbf5ec89104f35a4161ff57221f.png";
import manKids from "../../extra/images/9d1c5ec721743c5e6858a3407d2f69bd7e63bd81.png";
import pictureWithFamily from "../../extra/images/b8f26f0f4f31ba5ff2d45ffa49487a14218aa6bf.png";
import "./Difference.css";

const Difference = () => {
  return (
    <Container>
      <Row className="home3">
        <Col md={{ span: 6 }}>
          <h2>Difference for all </h2>
        </Col>
        <Col md={{ span: 6 }}>
          <p>
            You should "listen to my mixtape" (check out the rest of my
            portfolio). Smiling could easily be misinterpreted for showing your
            teeth to someone because they said something that made you happy.
            Most streets are two-way streets...why does that make love so
            special?.
          </p>
        </Col>
  
        <Col md={{ span: 3 }}>
          <Image className="img-resize-chair" src={chair} alt="chair" />
        </Col>
        <Col md={{ span: 6 }}>
          <Image className="img-resize-family" src={manKids} alt="family" />
        </Col>
        <Col md={{ span: 3 }}>
          <Image
            className="img-resize-chair img-resize-flower"
            src={pictureWithFamily}
            alt="pictureandflower"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Difference;
