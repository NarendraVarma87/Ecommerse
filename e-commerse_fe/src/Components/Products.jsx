import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Products.css'
const Products = () => {
  const [productsData, setProductsData] = useState([]);
  let navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:9011/products/get")
      .then(response => {
        setProductsData(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);
  const handleCheck = (productId) => {
    navigate(`/get/${productId}`)
  }
  return (
    <>
    <div>
    </div>
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
      {productsData.map(item => (
        <div key={item.id} className="col btn">
          <div className="card">
            <img src={item.productUrl} alt={item.productId} className="card-img-top prodImg" onClick={()=>handleCheck(item.productId)}/>
            <div className="card-body">
              <h5 className="card-title">{item.productTitle}</h5>
              <p className="card-text">Inc offers</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Products;
