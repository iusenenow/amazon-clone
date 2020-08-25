import React from 'react'
import { useStateValue } from './StateProvider';

const CheckoutProduct = ({ id, title, image, price, rating }) => {

  const [{ cart }, dispatch] = useStateValue()

  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: id
    })
  }

  return (
    <div className="checkoutProduct">
      <img src={image} alt="product" className="checkoutProduct-image" />
      <div className="checkoutProduct-info">
        <p className="checkoutProduct-title">{title}</p>
        <p className="checkoutProduct-price">
          <strong>${price}</strong>
        </p>
        <p className="checkoutProduct-rating">
          {Array(rating).fill().map(_ =>
            <span role="img" aria-label="rating star">⭐</span>)}
        </p>

        <button onClick={removeFromCart}>Remove from Cart</button>
      </div>
    </div>
  )
}

export default CheckoutProduct
