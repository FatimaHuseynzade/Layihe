import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SearchInput from '../Search/SearchInput';
import FilterCountry from '../FilterCountry/FilterCountry';

const AllCountries = ({ theme }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetchAllCountries();
  }, []);

  const fetchAllCountries = async () => {
    try {
      const res = await axios.get("https://restcountries.com/v3.1/all");
      setCountries(res.data);
    } catch (error) {
      console.error('Xəta baş verdi:', error);
     
    }
  };

  const getCountryByName = async (countryName) => {
    try {
      const res = await axios.get(`https://restcountries.com/v3.1/name/${countryName}`);
      setCountries(res.data);
    } catch (error) {
      console.error('Xəta baş verdi:', error);
     
    }
  };

  const getCountryByRegion = async (regionName) => {
    try {
      if (!regionName) {
        fetchAllCountries();
        return;
      }
  
      const res = await axios.get(`https://restcountries.com/v3.1/region/${regionName}`);
      setCountries(res.data);
    } catch (error) {
      console.error('Xəta baş verdi:', error);
    }
  };

  return (
    <div className={`all__country__wrapper ${theme === 'dark' ? 'dark' : 'light'}`}>
      <div className="country__top">
        <SearchInput onSearch={getCountryByName} />
        <FilterCountry onSelect={getCountryByRegion} />
      </div>
      <div className="country__bottom">
        {countries.map((country) => (
          <Link to={`/country/${country.name.common}`} key={country.cca3}>
            <div className="country_card">
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
};

export default AllCountries;
