import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const SearchBarComp = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    const cleanedCity = city.trim();

    if (cleanedCity !== "") {
      onSearch(cleanedCity);
    }
  };

  return (
    <Row className="text-center mx-4">
      <Col xs={4} md={7}>
        <Form.Control
          placeholder="Vedi la città dei tuoi sogni"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </Col>
      <Col xs={1}>
        <Button onClick={handleSearch}>CERCA</Button>
      </Col>

      {/* <Button onClick={handleSearch}>CERCA</Button> */}
    </Row>
  );
};

export default SearchBarComp;
