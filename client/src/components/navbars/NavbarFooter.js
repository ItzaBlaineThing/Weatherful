import React from 'react';

// Import Bootstrap Components
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavbarFooter() {

	return (
		<div>
            <Navbar expand="lg" fixed="bottom">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Navbar.Text>Weather data provided by <Nav.Link href="https://openweathermap.org/api" className="navbarfooter-nav-item" target="_blank">OpenWeather API</Nav.Link></Navbar.Text>
                    </Nav>
                    <Nav className="ml-auto">
                        <Navbar.Text>Created by <a href="https://chandlerblainemorris.com/" id="navbarfooter-nav-portfolio" target="_blank">Chandler Morris</a></Navbar.Text>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
		</div>
	)
	
}