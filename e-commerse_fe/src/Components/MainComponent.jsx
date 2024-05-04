import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom'

const MainComponent = () => {
    const navigate = useNavigate();
    const [productsData, setProductsData] = useState([]);
    const { productId } = useParams();
    const [similarProducts, setSimilarProducts] = useState([]);
    const [Category, setCategory] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:9011/products/getby/${productId}`)
            .then(response => {
                setProductsData(response.data);
                setCategory(response.data.productCategory);
            })
            .catch(error => {
                console.log("Error is :", error);
                setProductsData(null);
            });
    }, [productId]);

    useEffect(() => {
        if (Category !== "") {
            axios.get(`http://localhost:9011/products/${Category}`)
                .then(response => {
                    setSimilarProducts(response.data);
                })
                .catch(error => {
                    console.log("Error fetching similar products:", error);
                    setSimilarProducts([]);
                });
        }
    }, [Category]);

    const handleProductClick = (productId) => {
        navigate(`/get/${productId}`);
    };

    return (
        <div>
            <div id='B-Id'>
                <div className='text-center'>
                    {productsData ? (
                        <>
                            <img src={productsData.productUrl} alt={productsData.productId} width={300} height={250}/>
                            <h2>{productsData.productTitle}</h2>
                            <h6 className='mx-5 p-2'>{productsData.productDescription}</h6>
                            <h4>Price : {productsData.productPrice}</h4>
                            <h5>Category : {productsData.productCategory}</h5>
                            <div className='d-flex align-items-center justify-content-center'>
                                <button className='btn btn-primary  m-2'>Add to Cart</button>
                                <button className='btn btn-success  m-2'>Buy Now</button>
                            </div>
                        </>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </div>
            <div>
                <h2 className='text-center m-2 p-2'>Similar Products</h2>
                <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4'>
                    {similarProducts.map(item => (
                        <div key={item.productId} className="col mb-4">
                            <div className="card">
                                <img src={item.productUrl} alt={item.productId} className="card-img-top prodImg"/>
                                <div className="card-body">
                                    <h5 className="card-title">{item.productTitle}</h5>
                                    <h6 className='mt-1'>price : {item.productPrice}</h6>
                                </div>
                                <div className="d-flex justify-content-center p-1">
                                    <button className="btn btn-outline-primary w-50" onClick={() => handleProductClick(item.productId)} >Know More</button> 
                                </div>
                               
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MainComponent;
