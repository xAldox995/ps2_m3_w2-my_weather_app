/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

const CityWeatherCard = ({ location, zipCode, onClick }) => {
  const [tempMin, setTempMin] = useState(null);
  const [tempMax, setTempMax] = useState(null);
  const [description, setDescription] = useState(null);
  const [humidity, setHumidity] = useState(null);

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
        setTempMin(weatherFetchData.main.temp_min.toFixed(2));
        setTempMax(weatherFetchData.main.temp_max.toFixed(2));
        setDescription(weatherFetchData.weather[0].description);
        setHumidity(weatherFetchData.main.humidity);
      })
      .catch((err) => {
        console.log("C'è un errore nel catch", err);
      });
  };

  useEffect(() => {
    fetchWeather();
  }, [location, zipCode]);

  return (
    <Row xs={8} md={6} lg={3} className=" m-5 g-5">
      <Col>
        <Card
          onClick={onClick}
          style={{
            border: "1px solid #ccc",
            padding: "20px",
            cursor: "pointer",
          }}
        >
          <Card.Body>
            <Card.Title>{location}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Temp Min : {tempMin} °C
            </Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">
              Temp Max : {tempMax} °C
            </Card.Subtitle>
            <Card.Text>
              Weather: {description} <br />
              Humidity: {humidity}%
            </Card.Text>
            <Card.Link href="#void">Card Link</Card.Link>
            <Card.Link href="#void">Another Link</Card.Link>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default CityWeatherCard;
