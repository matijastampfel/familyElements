import React, { useContext } from "react";
import { Navbar, Container, Offcanvas, Nav, Row, Col, Image } from "react-bootstrap";

import "./NavigationBar.css";
import { ColorContext } from "../../extra/Context/ColorContext";
import hallway from "../../extra/images/71b78f2321690f67c87bc0af95fb4cdb5b9fb15c.png"


const NavBar = () => {
  const { color, setColor } = useContext(ColorContext);

  return (
    <>
      <Container className="l-r-padding-zero">
        <Navbar className={color} expand={false}>
          <Container fluid>
           
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel">
                  Nestar
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
              <Row >
              <Col md={{ span: 5 }}>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link className="linkColor" href="/" onClick={() => setColor("pink")}>
                    <h2>Home</h2>
                  </Nav.Link>
                  <Nav.Link 
                  className="linkColor"
                    href="/careers"
                    onClick={() => setColor("lightBlue")}
                  >
                    <h2>Careers</h2>
                  </Nav.Link>
                  <Nav.Link className="linkColor" href="/contact" onClick={() => setColor("pink")}>
                    <h2>Contact</h2>
                  </Nav.Link>
                  <p className="paddingFix">ENGLISH</p>
                  <p>GERMAN</p>
                </Nav>
                </Col>
                <Col>
                <Image
                className="hallwaynavimage"
                src={hallway}
                alt="hallway"
              />
                </Col>
                </Row>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            
            <Navbar.Brand href="#">Nestar</Navbar.Brand>
          </Container>
        </Navbar>
      </Container>
    </>
  );
};

export default NavBar;
