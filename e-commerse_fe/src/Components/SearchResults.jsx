import React from 'react';
import { useLocation } from 'react-router-dom';

const SearchResults = () => {
  const location = useLocation();
  const products = location.state?.products || [];
  if (products.length === 0) {
    return (
      <div className="text-center mt-4">
        <h6>No products found under the entered price.</h6>
      </div>
    );
  }

  return (
    <div>
      <h6 className='text-center'>Search Results</h6>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
      {products.map(products => (
        <div key={products.productId} className="col btn">
          <div className="card">
            <img src={products.productUrl} alt={products.productId} className="card-img-top prodImg"/>
            <div className="card-body">
              <h5 className="card-title">{products.productTitle}</h5>
              <p className="card-text">Inc offers</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default SearchResults;
