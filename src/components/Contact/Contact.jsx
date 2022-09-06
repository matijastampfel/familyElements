import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import sofa from "../../extra/images/7d44adff70bf9da79e4c3b449ab902df99a08414.png";
import Footer from "../Footer/Footer";
import './Contact.css'

const Contact = () => {
  return (
    <>
      <Container className="home4">
        <Row>
          <Col sm={6}>
            <Image className="img-resize-redsofa" src={sofa} alt="sofa" />
          </Col>
          <Col sm={6}>
            <Col className="text-fix" sm={8}>
              <h1>A career within good homes</h1>
              <p>
              If you wake up with a giant zit, you are really facing your fears
              when you look in the mirror. Petrovache.{" "}
            </p>
            </Col>
          </Col>
        </Row>
        </Container>
        <Container className="home5">
        <Row>
          <Col sm={6}>
            <h1>Get in touch</h1>
          </Col>
          <Col sm={6}>
            <p>
              If you wake up with a giant zit, you are really facing your fears
              when you look in the mirror. Petrovache.{" "}
            </p>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </>
  );
};

export default Contact;
