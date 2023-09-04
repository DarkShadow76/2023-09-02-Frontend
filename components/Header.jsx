import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Container, NavDropdown } from "react-bootstrap";
import '../styles/custom.css'
//import Image from "react-bootstrap";

const Header = (props) => {
  return (
    <>
      <Navbar expand="sm" className="Navbar" fixed="top" data-bs-theme="dark">
        <Container style={{alignContent:"center"}}>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '10rem' }} navbarScroll>
              <Navbar.Brand href="/" style={{ color: "white" }}>TourIzi</Navbar.Brand>
              <Nav.Link href="/" className="textColor" style={{ color: "white" }}>Home</Nav.Link>
              <Nav.Link href="/about" style={{ color: "white" }}>About</Nav.Link>
              <Nav.Link href="#" className="nav-item active" style={{ color: "white" }}>Support
              </Nav.Link>
              <Nav.Link href="#" style={{ color: "white" }}>Review
              </Nav.Link>
              <NavDropdown title="Servicios" id={`offcanvasNavbarDropdown-expand-${"sm"}`}>
                <NavDropdown.Item href="#action3" >
                  Acccion 1
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action4">
                  Accion 2
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Accion 3
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <h2 style={{
        marginTop: "6%",
        alignContent: "revert"
      }}>{props.titulo}</h2>
    </>
  );
}

export default Header