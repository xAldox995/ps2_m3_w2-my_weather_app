import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBarComp from "./SearchBarComp";

const Home = () => {
  //uso una location di default che sarà quella dell'utente
  const [userLocation, setUserLocation] = useState("Rome");
  const [userZipCode, setUserZipCode] = useState("001000");
  const [searchLocation, setSearchLocation] = useState(null);
  const [searchZipCode, setSearchZipCode] = useState(null);
  const navigate = useNavigate();

  const handleSearch = (city, zipCode) => {
    setSearchLocation(city);
    setSearchZipCode(zipCode);
  };

  const handleCardClick = (city, zipCode) => {
    navigate(`details/${city}/${zipCode}`);
  };

  return (
    <div className="text-center mt-5">
      <h1>My Weather App</h1>
      <div className="mt-5">
        <SearchBarComp onSeach={handleSearch} />
        {serachLocation && (
         <CityWeatherCard location={searchLocation} zipCode={searchZipCode} onClick = {() => handleCardClick(searchLocation, searchZipCode)} />
        )}
      </div>
      <div>
        <CityWeatherCard location={userLocation} zipCode={userZipCode} onClick = {() => handleCardClick(userLocation, userZipCode)} />
      </div>
    </div>
  );
};

export default Home;
