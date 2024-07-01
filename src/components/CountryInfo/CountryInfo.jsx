import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const CountryInfo = () => {
  const [country, setCountry] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const { countryName } = useParams();

  const getCountryByName = async () => {
    try {
      const res = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
      if (!res.ok) throw new Error('Not found any country!');
      const data = await res.json();
      setCountry(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    getCountryByName();
  }, [countryName]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="country__info__wrapper">
      <button>
        <Link to="/">Back</Link>
      </button>
      {country && country.map((country, index) => (
        <div className="country__info__container" key={index}>
          <div className="country_info-img">
            <img src={country.flags.png} alt={`${country.name.common} flag`} />
          </div>
          <div className="country_info">
            <h3>{country.name.common}</h3>
            <div className="country_info-left">
              <h5>Capital: <span>{country.capital}</span></h5>
              <h5>Population: <span>{country.population}</span></h5>
              <h5>Region: <span>{country.region}</span></h5>
              <h5>Sub Region: <span>{country.subregion}</span></h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountryInfo;
