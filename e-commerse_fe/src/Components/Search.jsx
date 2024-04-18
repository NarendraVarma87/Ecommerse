import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [priceSearch, setPriceSearch] = useState('');
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:9011/products/getbyprice/${priceSearch}`);
      navigate('/navigate', { state: { products: response.data } }); // Use 'state' to pass data to the route
    } catch (error) {
      console.error('Error searching products:', error);
    }
  };

  return (
    <div>
      <form className="d-flex" onSubmit={handleSearch}>
        <input
          className="form-control me-2"
          type="number"
          value={priceSearch}
          onChange={(e) => setPriceSearch(e.target.value)}
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;
