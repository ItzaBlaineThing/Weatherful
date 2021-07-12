import React from 'react';

// Import Custom Components
import NavbarHeader from '../navbars/NavbarHeader';

// Import Bootstrap Components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';

export default function Landing() {

	return (
        <div className="landing-div">
            <NavbarHeader />

            <div className="landing-search-div">
                <Container>
                    <h1 className="landing-title">WEATHERFUL</h1>
                    <h3 className="landing-subtitle">Check the weather in any city or zip code</h3>

                    <Form>
                        <InputGroup className="landing-form-inputgroup">
                            <Form.Control type="email" placeholder="Enter the City Name or Zip Code" />
                            <DropdownButton variant="landing-form-dropdown" title={"°F"} id="landing-dropdown-units">
                                <Dropdown.Item eventKey="1">°C</Dropdown.Item>
                                <Dropdown.Item eventKey="2">°K</Dropdown.Item>
                            </DropdownButton>
                        </InputGroup>

                        <Button variant="landing-search" type="submit">Search</Button>
                    </Form>
                </Container>
            </div>

        </div>
	)
	
}