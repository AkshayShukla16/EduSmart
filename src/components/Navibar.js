import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navibar() {
  return (
    <div>
       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/home">EduSmart</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/homepage">Home</Nav.Link>
            <NavDropdown title="Courses" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/standard5-6">Standard 5-6</NavDropdown.Item>
              <NavDropdown.Item href="/standard7-8">Standard 7-8</NavDropdown.Item>
              <NavDropdown.Item href="/standard9-10">Standard 9-10</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/competitive">
                Competitive
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/study-material">Study Materials</Nav.Link>
            <Nav.Link href="/scholarship">Scholarship</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/connect">Connect Us</Nav.Link>
            {/*<Nav.Link eventKey={2} href="#memes">
              Connect Us
            </Nav.Link>*/}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navibar
