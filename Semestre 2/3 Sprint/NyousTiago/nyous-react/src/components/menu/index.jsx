import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

const Menu = () => {
    return (
      <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Nyous</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
        </Nav>
        <Nav>
            <Nav.link href="/login">Login</Nav.link>
            <Nav.link href="/cadastrar">Cadastrar</Nav.link>
        </Nav>
      </Navbar.Collapse>
   </Navbar>
  )
}

export default Menu;