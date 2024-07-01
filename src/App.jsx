import React from "react";
import "./assets/style.scss";
import { Route, Routes } from "react-router-dom";
import AllCountries from "./components/AllCountries/AllCountries";
import CountryInfo from "./components/CountryInfo/CountryInfo";
import { FaRegMoon } from "react-icons/fa";

const App = () => {
  return (
    <>
      <header className="header">
        <div className="container">
        <h5>Where in the world</h5>
        <button className="toggle"><FaRegMoon />dark mode</button>
        </div>
        </header>
      <div className="container">
      <Routes>
        <Route path="/" element={<AllCountries/>}/>
        <Route path="/country/:countryName" element={<CountryInfo/>}/>
      </Routes>
      </div>
    </>
  );
};

export default App;
