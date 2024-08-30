import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const SearchBarComp = ({ onSearch }) => {
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");

  const handleSearch = () => {
    const cleanedCity = city.trim();
    const cleanedZipCode = zipCode.trim();

    if (cleanedCity !== "") {
      onSearch(cleanedCity, cleanedZipCode);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Search for a city..."
      />
      <input
        type="text"
        value={zipCode}
        onChange={(e) => setZipCode(e.target.value)}
        placeholder="Enter ZIP code..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBarComp;
