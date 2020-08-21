import React from 'react'

const Product = ({ id, title, image, price, rating }) => {
  return (
    <div className="product">
      <div className="product-info">
        <h4>{title}</h4>
        <p className="product-price">
          <strong>${price}</strong>
        </p>
        <div className="product-rating">
          {
            Array(rating).fill().map(_ => (
              <p>⭐</p>
            ))
          }
        </div>
      </div>

      <img src={image} alt="image" />
      <button>Add to Cart</button>
    </div>
  )
}

export default Product
