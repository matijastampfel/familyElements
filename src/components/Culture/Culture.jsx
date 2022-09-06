import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./Culture.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHand,
  faPaperPlane,
  faMicrochip,
} from "@fortawesome/free-solid-svg-icons";

const Culture = () => {
  return (
    <>
      <Container className="carer4 text-fix-right">
        <Row className="text-fix-left under-line">
          <Col>
            <p>Something</p>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 7 }} sm={{ span: 12 }} className="carer4">
            <Col md={{ span: 12 }} sm={{ span: 6 }}>
              <h3>Culture that</h3>
            </Col>
            <Col md={{ span: 12 }} sm={{ span: 6 }}>
              <h4>shape us</h4>
            </Col>
          </Col>
          <Col
            md={{ span: 5 }}
            sm={{ span: 12 }}
            className="text-fix-right carer4"
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
          </Col>
        </Row>

        <Row className="text-fix-left">
          <Col md={{ span: 4 }} sm={{ span: 6 }}>
            <FontAwesomeIcon icon={faHand} size="2x" />
            <h5>Lorem </h5>
            <Col>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            </Col>
          </Col>
          <Col md={{ span: 4 }} sm={{ span: 6 }}>
            <FontAwesomeIcon icon={faPaperPlane} size="2x" />
            <h5>Lorem </h5>
            <Col>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            </Col>
          </Col>
          <Col md={{ span: 4 }} sm={{ span: 6 }}>
            <FontAwesomeIcon icon={faMicrochip} size="2x" />
            <h5>Lorem </h5>
            <Col>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Culture;
