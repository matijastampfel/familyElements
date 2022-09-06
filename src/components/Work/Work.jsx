import React from "react";
import { Container, Table, Row, Col } from "react-bootstrap";
import "./Work.css";

const Work = () => {
  return (
    <Container className="text-fix">
      <Row>
        <Col>
          <h2>Want to work with us ?</h2>
        </Col>
      </Row>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Job</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody className="text-fix">
          <tr>
            <td>Front-End Dev</td>
            <td>IT</td>
            <td>
              <a href="#">APPLY</a>
            </td>
          </tr>
          <tr>
            <td>Front-End Dev</td>
            <td>IT</td>
            <td>
              <a href="#">APPLY</a>
            </td>
          </tr>
          <tr>
            <td>Front-End Dev</td>
            <td>IT</td>
            <td>
              <a href="#">APPLY</a>
            </td>
          </tr>
          <tr>
            <td>Front-End Dev</td>
            <td>IT</td>
            <td>
              <a href="#">APPLY</a>
            </td>
          </tr>
          <tr>
            <td>Front-End Dev</td>
            <td>IT</td>
            <td>
              <a href="#">APPLY</a>
            </td>
          </tr>
          <tr>
            <td>Front-End Dev</td>
            <td>IT</td>
            <td>
              <a href="#">APPLY</a>
            </td>
          </tr>
          <tr>
            <td>Front-End Dev</td>
            <td>IT</td>
            <td>
              <a href="#">APPLY</a>
            </td>
          </tr>
          <tr>
            <td>Front-End Dev</td>
            <td>IT</td>
            <td>
              <a href="#">APPLY</a>
            </td>
          </tr>
          <tr>
            <td>Front-End Dev</td>
            <td>IT</td>
            <td>
              <a href="#">APPLY</a>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default Work;
