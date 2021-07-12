import React from 'react';

// Import Bootstrap Components
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavbarHeader() {

	return (
		<div>
            <Navbar expand="lg" sticky="top">
                <Navbar.Brand href="/" id="navbarheader-brand">WF</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#about" className="navbarheader-nav-item">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
		</div>
	)
	
}