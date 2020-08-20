import React from 'react'

const Product = ({ id, title, image, price, rating }) => {
  return (
    <div className="product">
      <h3>{title}</h3>
      <p className="product-price">
        <small>$</small>
        <strong>{price}</strong>
      </p>
      <div className="product-rating">
        {
          Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))
        }
      </div>
    </div>
  )
}

export default Product
