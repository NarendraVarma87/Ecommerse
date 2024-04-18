import React, { useState } from 'react'
import axios from 'axios'

const AddProduct = () => {
    const [productData, setProductData] = useState({
        productTitle: "",
        productDescription: "",
        productCategory: "",
        productQuantity: 0,
        productPrice: 0,
        productUrl: ""
    })
    const productHandler = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:9011/products/add-product", productData);
            console.log(res.data);
            setProductData({
                productTitle: "",
                productDescription: "",
                productCategory: "",
                productQuantity: 0,
                productPrice: 0,
                productUrl: ""
            });
        } catch (error) {
            console.error("Error adding product:", error);
        }
    }    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductData({ ...productData, [name]: value });
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6 p-3 m-2">
                    <h2 style={{ fontFamily: 'Arial', color: 'blue' }}>Add Product</h2>
                    <form onSubmit={productHandler}>
                        <div className="form-group m-1">
                            <label htmlFor="productTitle" style={{ fontFamily: 'Arial', color: 'black' }}>Title: </label>
                            <input type="text" name="productTitle" id="productTitle" className='form-control' style={{ fontFamily: 'Arial' }} placeholder="Enter product title" value={productData.productTitle} onChange={handleChange} />
                        </div>
                        <div className="form-group m-1">
                            <label htmlFor="productDescription" style={{ fontFamily: 'Arial', color: 'black' }}>Description: </label>
                            <input type="text" name="productDescription" id="productDescription" className='form-control' style={{ fontFamily: 'Arial' }} placeholder="Enter product description" value={productData.productDescription} onChange={handleChange} />
                        </div>
                        <div className="form-group m-1">
                            <label htmlFor="productCategory" style={{ fontFamily: 'Arial', color: 'black' }}>Category:</label>
                            <input type="text" name="productCategory" id="productCategory" className='form-control' style={{ fontFamily: 'Arial' }} placeholder="Enter product category" value={productData.productCategory} onChange={handleChange} />
                        </div>
                        <div className="form-group m-1">
                            <label htmlFor="productQuantity" style={{ fontFamily: 'Arial', color: 'black' }}>Quantity:</label>
                            <input type="number" name="productQuantity" id="productQuantity" className='form-control' style={{ fontFamily: 'Arial' }} placeholder="Enter product quantity" value={productData.productQuantity} onChange={handleChange} />
                        </div>
                        <div className="form-group m-1">
                            <label htmlFor="productPrice" style={{ fontFamily: 'Arial', color: 'black' }}>Price:</label>
                            <input type="number" name="productPrice" id="productPrice" className='form-control' style={{ fontFamily: 'Arial' }} placeholder="Enter product price" value={productData.productPrice} onChange={handleChange} />
                        </div>
                        <div className="form-group m-1">
                            <label htmlFor="productUrl" style={{ fontFamily: 'Arial', color: 'black' }}>URL:</label>
                            <input type="text" name="productUrl" id="productUrl" className='form-control' style={{ fontFamily: 'Arial' }} placeholder="Enter product URL" value={productData.productUrl} onChange={handleChange} />
                        </div>
                        <div className='row justify-content-center'>
                        <button type="submit" className='btn btn-primary form-control w-25 m-3' style={{ fontFamily: 'Arial' }}>Submit</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default AddProduct
