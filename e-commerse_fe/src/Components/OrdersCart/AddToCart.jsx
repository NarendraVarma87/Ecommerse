import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Cart.css';

const AddToCart = () => {
    const [cartData, setCartData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:9012/api/get')
            .then(res => setCartData(res.data))
            .catch(error => {
                console.error("Error fetching cart data:", error);
            });
    }, []);

    const productHandler = async (e) => {
        e.preventDefault();
        // Implementation for adding product to cart
    };

    return (
        <div className="container">
            <div className="row">
                {
                    cartData.map((item) => (
                        <div key={item.cartId} className="col-12 col-sm-6 col-md-5 col-lg-4 mb-4 mt-3 pt-1">
                            <div className="card h-100">
                                <div className="m-1 p-1 d-flex align-items-center justify-content-center">
                                    <img src={item.productUrl} alt={item.productTitle} className="card-img-top" style={{ height: '260px', width: '260px' }} />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title text-center">{item.productTitle}</h5>
                                    <p className="card-text">{item.productDescription}</p>
                                    <h6>Price: {item.productPrice}</h6>
                                </div>
                                <div className="d-flex justify-content-center align-items-center">
                                    <button type="button" className="btn btn-primary w-25 mb-3 pb-1">Order</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default AddToCart;
