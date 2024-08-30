import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = '/' element = {<Home/>} />
      {/*QUI VEDO I DETTAGLI DELLE CITTA
       <Route path='/details/:cityName/:zipCode' element = {<CityWeatherDetails/>}/> 
       */}
    </Routes>

    </BrowserRouter>

  );
}

export default App;
