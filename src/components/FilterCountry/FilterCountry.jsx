import React from 'react';

const FilterCountry = ({ onSelect, onReset }) => {
  const handleSelectChange = (e) => {
    const regionName = e.target.value === "all" ? "" : e.target.value;
    onSelect(regionName);
  };

  return (
    <select onChange={handleSelectChange}>
      <option value="">Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
};

export default FilterCountry;
