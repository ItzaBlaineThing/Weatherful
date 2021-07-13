import React, { useEffect, useState } from 'react';

// Import Custom Components
import NavbarHeader from '../components/navbars/NavbarHeader';
import NavbarFooter from '../components/navbars/NavbarFooter';

// Import Bootstrap Components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function Weather() {

    const [data, setWeatherData] = useState([]);

    useEffect(() => {
        fetch("/api/results")
            .then(res => res.json())
            .then(data => setWeatherData(data));
    }, []);

    // Function to check if an object is empty
    function checkObject(object) {
        return Object.keys(object).length === 0;
    }

    // Checking to see if our 'data' object is empty
    var doesDataExist = false
    if (checkObject(data) === false) {
        doesDataExist = true;
    }

    var cityName = "";
    var temp = "";
    var mainDescription = "";
    var description = "";
    var high = "";
    var low = "";
    var humidity = "";
    var feelsLike = "";
    var wind = "";
    var pressure = "";
    var sunrise = "";
    var sunset = "";


    // If the 'data' object is not empty, we're safe to call specific values
    if (doesDataExist) {
        console.log(data);
        console.log(data.weatherData.coord);
        console.log(data.weatherData.name);
        cityName = data.weatherData.name;
    } else {
        console.log("Doesn't Exist");
    }

	return (
		<div className="weather-div">
            <NavbarHeader />
			
            <div className="weather-results-div">
                <Container>
                    <Row>
                        <Col xl={12}>
                            <h1 className="weather-results-title">{cityName}</h1>
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