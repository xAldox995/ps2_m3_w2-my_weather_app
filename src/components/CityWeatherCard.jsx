import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

const CityWeatherCard = ({ location, zipCode, onClick }) => {
  const [weatherData, setWeatherData] = useState({});

  const fetchWeather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location},${zipCode}&appid=8f6cfdee89828a762d2fc0e9157104af`
    )
      .then((response) => {
        console.log("Questa è la response", response);
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel secondo Then");
        }
      })
      .then((weatherFetchData) => {
        console.log("Dati della fetch", weatherFetchData);
        setWeatherData(weatherFetchData);
      })
      .catch((err) => {
        console.log("C'è un errore nel catch",err);
      });
  };

  useEffect(() => {
    fetchWeather();
  }, [location, zipCode]);

  return (
    <Row xs={8} md={6} lg={3} className=" m-5 g-5" >
      <Col>
        <Card onClick={onClick} style={{ border: '1px solid #ccc', padding: '20px', cursor: 'pointer' }}>
          <Card.Body>
            <Card.Title>{weatherData.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
                Temperature : {weatherData.main.temp} °C
            </Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default CityWeatherCard;
