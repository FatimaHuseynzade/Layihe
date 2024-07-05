import React, { useState } from "react";
import "./assets/style.scss";
import { Link, Route, Routes } from "react-router-dom";
import AllCountries from "./components/AllCountries/AllCountries";
import CountryInfo from "./components/CountryInfo/CountryInfo";
import Contact from "./page/Contact";
import Login from "./page/Login";

const App = () => {
  const [theme, setTheme] = useState("light");

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.setAttribute("data-theme", newTheme);
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <h5>Where in the world</h5>
         <div className="route">
          <p><Link to='/AllCountries'>Home</Link></p>
         <p><Link to="/contact">Contact</Link></p>
          <p><Link to="/login">Login</Link></p>

         </div>
          <div className="wrapper">
            <label className="switch">
              <input type="checkbox" onChange={switchTheme} />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
      </header>
      <div className="container">
        <Routes>
          <Route path="/" element={<AllCountries theme={theme} />} />
          <Route path="/country/:countryName" element={<CountryInfo />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/AllCountries"element={<AllCountries/>}/>
        </Routes>
      </div>
    </>
  );
};

export default App;
