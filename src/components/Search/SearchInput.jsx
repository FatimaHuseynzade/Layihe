import React, { useState } from 'react';
import { IoSearch } from 'react-icons/io5';

const SearchInput = ({ onSearch }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(input.trim()); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="search_input">
        <IoSearch className="search_icon" />
        <input
          type="text"
          placeholder="Search for a country..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
    </form>
  );
};

export default SearchInput;
