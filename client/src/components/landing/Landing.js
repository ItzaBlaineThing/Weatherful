import React from 'react';

// Import Custom Components
import NavbarHeader from '../navbars/NavbarHeader';
import NavbarFooter from '../navbars/NavbarFooter';

// Import Bootstrap Components
import Container from 'react-bootstrap/Container';
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

                    <Form method="POST" action="api/search" encType="multipar/form-data">
                        <InputGroup className="landing-form-inputgroup">
                            <Form.Control type="text" placeholder="Enter the City Name or Zip Code" name="searchParameter" />
                            <DropdownButton variant="landing-form-dropdown" title={"°F"}>
                                <Dropdown.Item eventKey="1">°C</Dropdown.Item>
                                <Dropdown.Item eventKey="2">°K</Dropdown.Item>
                            </DropdownButton>
                        </InputGroup>

                        <Button variant="landing-search" type="submit">Search</Button>
                    </Form>
                </Container>
            </div>

            <NavbarFooter />
        </div>
	)
	
}