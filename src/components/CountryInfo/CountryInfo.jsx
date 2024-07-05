import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const CountryInfo = () => {
  const [country, setCountry] = useState(null);
  const [error, setError] = useState("");
  const { countryName } = useParams();

  const getCountryByName = async () => {
    try {
      const res = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
      if (!res.ok) {
        throw new Error('Ölkə tapılmad:');
      }
      const data = await res.json();
      setCountry(data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    getCountryByName();
  }, [countryName]);

  return (
    <div className="country__info__wrapper">
      <button>
        <Link to="/">Back</Link>
      </button>
      {country && country.map((countryData) => (
        <div className="country__info__container" key={countryData.cca3}>
          <div className="country_info-img">
            <img src={countryData.flags.png} alt={`${countryData.name.common} flag`} />
          </div>
          <div className="country_info">
            <h3>{countryData.name.common}</h3>
            <div className="country_info-left">
              <h5>Capital: <span>{countryData.capital}</span></h5>
              <h5>Population: <span>{countryData.population}</span></h5>
              <h5>Region: <span>{countryData.region}</span></h5>
              <h5>Sub Region: <span>{countryData.subregion}</span></h5>
              <h5>Top Level Domain: <span>{countryData.tld}</span></h5>
            </div>
          </div>
        </div>
      ))}
      {error && <p>{error}</p>}
    </div>
  );
};

export default CountryInfo;
