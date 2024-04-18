import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Products.css'
const Products = () => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9011/products/get")
      .then(response => {
        setProductsData(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
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
  );
};

export default Products;
