import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./Benefits.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCalendarDays, faClockRotateLeft, faTag,faBookJournalWhills } from '@fortawesome/free-solid-svg-icons'

const Benefits = () => {
  return (
    <>
      <Container className="carer3 text-fix">
        <Row>
          <Col sm={12}>
            <h1> Employee benefits</h1>
          </Col>
        </Row>

        <Row>
          <Col sm>
          <FontAwesomeIcon icon={faCalendarDays} size="2x" />
            <h5>Ola Ola</h5>
            You should "listen to my mixtape" (check out the rest of my
              portfolio). Smiling could easily be misinterpreted for showin
          </Col>
          <Col sm>
          <FontAwesomeIcon icon={faClockRotateLeft} size="2x" />
            <h5>Ola Ola</h5>
            You should "listen to my mixtape" (check out the rest of my
              portfolio). Smiling could easily be misinterpreted for showin
          </Col>
          <Col sm>
          <FontAwesomeIcon icon={faTag} size="2x"/>
            <h5>Ola Ola</h5>
            You should "listen to my mixtape" (check out the rest of my
              portfolio). Smiling could easily be misinterpreted for showin
          </Col>
          <Col sm>
          <FontAwesomeIcon icon={faBookJournalWhills} size="2x"/>
            <h5>Ola Ola</h5>
            
              You should "listen to my mixtape" (check out the rest of my
              portfolio). Smiling could easily be misinterpreted for showin
            
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Benefits;
