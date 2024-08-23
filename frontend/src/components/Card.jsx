import React from 'react'
import '../components/Card.scss'
import { Link } from 'react-router-dom'

export default function Card(
    {
        productUrl,
        productName,
        productCategory,
        productPrice

    }) {

    return (
      <>
     
        <div className="product-card ">
        <Link to="/product-detail" >
        <div className="product-image">
          <img
            src={productUrl}
            alt="Product Image"
            className=""
          />
        </div>
        </Link>
        <div className="product-details mt-4">
          <h5 className="product-name">{productName}</h5>
          <p className="product-size ">{productCategory}</p>
      
          <div className="product-price ">
            <span className="text-lg font-semibold text-gray-900">₹{productPrice}</span>
            <button className="add-to-cart-btn ">ADD</button>
          </div>
        </div>
      </div>
      </>
    )
}
