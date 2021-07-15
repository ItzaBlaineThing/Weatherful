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
    var windDirection = "";
    var windSpeed = "";
    var sunrise = "";
    var sunset = "";
    var iconURL = "";

    // Function to convert a unix timestamp to local time
    function getTime(timeStamp) {
        // Assign the unix timestamp to a variable
        const unixTime = timeStamp;
        // Change unix time from seconds to milliseconds
        const date = new Date(unixTime * 1000);
        // Retrieve local hours based on timestamp
        var hours = date.getHours();
        // Logic to change from military time to normal time
        if (hours > 12) { hours = hours - 12; }
        // Retrieve local minutes based on timestamp
        var minutes = "0" + date.getMinutes();
        // Create a string with the local time based on timestamp
        const time = `${hours}:${minutes.substr(-2)}`;
        // Return the string
        return time;
    }

    // Function to get the wind direction
    function getSector(degrees) {
        // Store our sector values in an array
        const compassSectors = ["N", "NE", "E", "SE", "S", "SW", "W", "NW", "N"];
        // Assign the degrees to a variable
        var direction = degrees;
        // Divide the degrees by 360 since we're determining direction
        direction = (direction % 360) + 1;
        // We have 8(9 with the addition of 'N' twice), need to divide by 45(360/8) to obtain our sector
        direction = Math.round(direction / 45);
        // Pull the sector based on the number above
        const sector = compassSectors[direction];
        // Return the wind direction string
        return sector;
    }

    // Function to capitalize a word
    function capitalizeWord(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }


    // If the 'data' object is not empty, we're safe to call specific values
    if (doesDataExist) {
        console.log("Sunrise: " + data.weatherData.sys.sunrise);
        console.log(data);
        cityName = data.weatherData.name;
        temp = parseInt(data.weatherData.main.temp);
        mainDescription = data.weatherData.weather[0].main;
        iconURL = `http://openweathermap.org/img/wn/${data.weatherData.weather[0].icon}.png`
        console.log(iconURL);
        description = capitalizeWord(data.weatherData.weather[0].description);
        high = data.weatherData.main.temp_max;
        low = data.weatherData.main.temp_min;
        humidity = data.weatherData.main.humidity;
        feelsLike = data.weatherData.main.feels_like;
        windDirection = getSector(data.weatherData.wind.deg);
        windSpeed = parseInt(data.weatherData.wind.speed);
        console.log("Wind Direction: " + windDirection);
        pressure = data.weatherData.main.pressure;
        sunrise = getTime(data.weatherData.sys.sunrise);
        sunset = getTime(data.weatherData.sys.sunset);
        console.log(sunset);
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
                                    <h3 className="weather-results-main-description">{mainDescription}</h3>
                                    <h5 className="weather-results-description">{description}</h5>
                                </Col>
                                <Col xl={2} className="weather-col-test">
                                    <img src={iconURL} className="weather-results-img"></img>
                                </Col>
                            </Row>
                        </Col>
                        <Col className="weather-col-test">
                            <h3 className="weather-results-temp">{temp}°</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={12}>
                            <Row className="weather-row-list">
                                <Col xl={6} className="weather-col-info" id="weather-col-test">
                                    <ListGroup variant="flush">
                                        <ListGroup.Item className="weather-listgroup-item">Humidity - {humidity}%</ListGroup.Item>
                                        <ListGroup.Item className="weather-listgroup-item">Wind - {windDirection} {windSpeed} mph</ListGroup.Item>
                                        <ListGroup.Item className="weather-listgroup-item">Sunrise - {sunrise}AM</ListGroup.Item>
                                    </ListGroup>
                                </Col>
                                <Col xl={6} className="weather-col-info">
                                    <ListGroup variant="flush">
                                        <ListGroup.Item className="weather-listgroup-item">Feels Like - {feelsLike}°</ListGroup.Item>
                                        <ListGroup.Item className="weather-listgroup-item">Pressure - {pressure} inHG</ListGroup.Item>
                                        <ListGroup.Item className="weather-listgroup-item">Sunset - {sunset}PM</ListGroup.Item>
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