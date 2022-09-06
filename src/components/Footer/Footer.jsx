import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './Footer.css'

const Footer = () => {
  return (
    <>
      <Container className="footer">
        <Row md={{ span: 6 }}>
          <Col  md={{ span: 8 }}>Contact</Col>
          <Col  md={{ span: 2 }}><a href="/">Home</a></Col>
          <Col  md={{ span: 2 }}><a href="careers">Careers</a></Col>
        </Row>
        <Row md={{ span: 6 }}>
          <Col  md={{ span: 8 }}>street 888 <br/> 32412 <br/> dadasdad@asdasd.com</Col>
          <Col  md={{ span: 2 }}><a href="contact">Contact</a></Col>
          <Col  md={{ span: 2 }}><a href="about">About</a></Col>
        </Row>
        <br/>
        <Row>
        <Col  md={{ span: 8 }}>Copy right</Col>
          <Col sm>Bla</Col>
          <Col sm>Bla bla</Col>
          <Col sm>asd da</Col>
          <Col sm>qeqeq</Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
