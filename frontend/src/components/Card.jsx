import React from 'react'
import '../components/Card.scss'

export default function Card(
    {
        productUrl,
        productName,
        productSize,
        productPrice

    }) {

    return (
        <div className="product-card ">
        <div className="product-image">
          <img
            src={productUrl}
            alt="Product Image"
            className=""
          />
        </div>
        <div className="product-details mt-4">
          <h2 className="product-name ">{productName}</h2>
          <p className="product-size ">{productSize}ml</p>
          <div className="product-price ">
            <span className="text-lg font-semibold text-gray-900">₹{productPrice}</span>
            <button className="add-to-cart-btn ">ADD</button>
          </div>
        </div>
      </div>
    )
}
