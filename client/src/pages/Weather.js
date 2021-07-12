import React from 'react';

// Import Custom Components
import NavbarHeader from '../components/navbars/NavbarHeader';
import NavbarFooter from '../components/navbars/NavbarFooter';

// Import Bootstrap Components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function Weather() {

	return (
		<div className="weather-div">
            <NavbarHeader />
			
            <div className="weather-results-div">
                <Container>
                    <Row>
                        <Col xl={12}>
                            <h1 className="weather-results-title">City Name</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={8}><h3 className="weather-results-main-description">Sunny</h3></Col>
                        <Col xl={4}><h3 className="weather-results-temp">84°</h3></Col>
                    </Row>
                </Container>
            </div>

            <NavbarFooter />
		</div>
	)
	
}