import React, { useEffect, useState } from 'react';

// Import Custom Components
import NavbarHeader from '../components/navbars/NavbarHeader';
import NavbarFooter from '../components/navbars/NavbarFooter';

// Import Bootstrap Components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
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
    var pressure = "";
    var wind = "";
    var sunrise = "";
    var sunset = "";
    var iconURL = "";


    // If the 'data' object is not empty, we're safe to call specific values
    if (doesDataExist) {
        console.log(data);
        cityName = data.weatherData.name;
        temp = data.weatherData.main.temp;
        mainDescription = data.weatherData.weather[0].main;
        iconURL = `http://openweathermap.org/img/wn/${data.weatherData.weather[0].icon}.png`
        console.log(iconURL);
        description = data.weatherData.weather[0].description;
        high = data.weatherData.main.temp_max;
        low = data.weatherData.main.temp_min;
        humidity = data.weatherData.main.humidity;
        feelsLike = data.weatherData.main.feels_like;
        pressure = data.weatherData.main.pressure;
        console.log(high);
    } else {
        console.log("Doesn't Exist");
    }

	return (
		<div className="weather-div">
            <NavbarHeader />
			
            <div className="weather-results-div">
                <Container className="weather-results-container">
                    <Row>
                        <Col xl={12}>
                            <h1 className="weather-results-title">{cityName}</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={8} className="weather-col-test">
                            <Row className="weather-row">
                                <Col className="weather-col-test">
                                    {/* <h3 className="weather-results-main-description">Lightning</h3> */}
                                    <h3 className="weather-results-main-description">{mainDescription}</h3>
                                    <h5 className="weather-results-description">{description}</h5>
                                </Col>
                                <Col xl={2} className="weather-col-test">
                                    <img src={iconURL} className="weather-results-img"></img>
                                </Col>
                            </Row>
                        </Col>
                        <Col className="weather-col-test">
                            <h3 className="weather-results-temp">82°</h3>
                            {/* <h3 className="weather-results-temp">{temp}°</h3> */}
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={12}>
                            <Row className="weather-row-list">
                                <Col xl={6} className="weather-col-info" id="weather-col-test">
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>Humidity</ListGroup.Item>
                                        <ListGroup.Item>Wind</ListGroup.Item>
                                        <ListGroup.Item>Sunrise</ListGroup.Item>
                                    </ListGroup>
                                </Col>
                                <Col xl={6} className="weather-col-info">
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>Feels Like</ListGroup.Item>
                                        <ListGroup.Item>Pressure</ListGroup.Item>
                                        <ListGroup.Item>Sunset</ListGroup.Item>
                                    </ListGroup>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <div className="results-search-div">
                        <a href="/" className="results-search">New Search</a>
                    </div>
                </Container>
            </div>

            <NavbarFooter />
		</div>
	)
	
}