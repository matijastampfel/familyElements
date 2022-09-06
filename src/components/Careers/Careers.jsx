import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./Careers.css";

import sofa from "../../extra/images/512dbc4bf05f4f6bee983d18540fd934ce97833d.png";
import hallway from "../../extra/images/68bc6f2ea528cbf66a104306fd6887788378373f.png";

import Why from "./../Why/Why";
import Benefits from "./../Benefits/Benefits";
import Culture from "./../Culture/Culture";
import Work from "../Work/Work";
import Footer from "../Footer/Footer";

const Careers = () => {
  return (
    <>
      <Container className="carer1">
        <Row>
          <Col md={{ span: 5 }}>
            <Col md={{ span: 7 }}>
              <Image
                className="img-resize-hallway"
                src={hallway}
                alt="hallway"
              />
            </Col>
            <Col className="h1control1" md={{ span: 5 }}>
            <h1>A career within good homes</h1>
          </Col>
            <Col className="text-fix" md={{ span: 8 }}>
              <p>
                If you wake up with a giant zit, you are really facing your
                fears when you look in the mirror. Petrovache. If you wake up
                with a giant zit, you are really facing your fears when you look
                in the mirror. Petrovache. If you wake up with a giant zit, you
                are really facing your fears when you look in the mirror.
                Petrovache.
              </p>
            </Col>
          </Col>
          <Col md={{ span: 7 }}>
            <Image className="img-resize-chillingx" src={sofa} alt="sofa" />
          </Col>
          <Col className="h1control2" md={{ span: 5 }}>
            <h1>A career within good homes</h1>
          </Col>
        </Row>
      </Container>
      <Why />
      <Benefits />
      <Culture />
      <Work />
      <Footer />
    </>
  );
};

export default Careers;
