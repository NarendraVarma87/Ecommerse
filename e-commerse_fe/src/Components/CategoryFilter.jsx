import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CategoryFilter = () => {
  const [productsData, setProductsData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:9011/products/${selectedCategory}`)
      .then(response => {
        setProductsData(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, [selectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
          Select Category
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <li><button className="dropdown-item" onClick={() => handleCategoryChange('mobiles')}>Mobiles</button></li>
          <li><button className="dropdown-item" onClick={() => handleCategoryChange('books')}>Books</button></li>
        </ul>
      </div>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {productsData.map(item => (
          <div key={item.id} className="col btn">
            <div className="card">
              <img src={item.productUrl} alt={item.productId} className="card-img-top prodImg"/>
              <div className="card-body">
                <h5 className="card-title">{item.productTitle}</h5>
                <p className="card-text">Inc offers</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
