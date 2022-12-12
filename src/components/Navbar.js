import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import brandlog from './reactimages/02614d7d102f1a441328312c6d3042ef.png';

function Menubar() {
  return (
    <div className='navbar-section'>
      <Navbar bg="dark" expand="lg" className='navbar' id='navbar'>
        <Container>
          <Navbar.Brand href="#home"><img src={brandlog} width="25%"></img></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto nav">
              <Nav.Link href="#home" className='text-warning'>Home</Nav.Link>
              <Nav.Link href="#gallery" className='text-warning'>Gallery</Nav.Link>
              <Nav.Link href="#footer" className='text-warning'>footer</Nav.Link>
              <Nav.Link href="#register" className='text-warning'>register</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Menubar