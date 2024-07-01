import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchInput from '../Search/SearchInput';
import FilterCountry from '../FilterCountry/FilterCountry';
import { Link } from 'react-router-dom';
function AllCountries() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all")
      .then(res => {
        console.log(res.data);
        setCountries(res.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error(error);
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  const getCountryByName = async (countryName) => {
    try {
      const res = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
      if (!res.ok) throw new Error('Not found any country!');
      const data = await res.json();
      setCountries(data);
    } catch (error) {
      setError(error.message);
    }
  };

  const getCountryByRegion = async (regionName) => {
    try {
      const res = await fetch(`https://restcountries.com/v3.1/region/${regionName}`);
      const data = await res.json();
      setCountries(data);
    } catch (error) {
      setError(error.message);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="all__country__wrapper">
      <div className="country__top">
        <div className="search">
          <SearchInput onSearch={getCountryByName} />
        </div>
        <div className="filter">
          <FilterCountry onSelect={getCountryByRegion}/>
        </div>
      </div>
      <div className="country__bottom">
        {isLoading && !error && <h4>Loading...</h4>}
        {error && !isLoading && <h4>{error}</h4>}

        {countries.map((country)=> (
          <Link to={`/country/${country.name.common}`}>
          <div className="country_card" key={country.cca3}>
            <div className="country_img">
              <img src={country.flags.png} alt="" />
            </div>
            <div className="country_data">
              <h3>{country.name.common}</h3>
              <h6>Population: {country.population}</h6>
              <h6>Region: {country.region}</h6>
              <h6>Capital: {country.capital}</h6>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default AllCountries;
