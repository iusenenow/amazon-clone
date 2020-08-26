import React from 'react'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

const Checkout = () => {

  const [{ cart }] = useStateValue()

  return (
    <div className="checkout">
      <img src="https://m.media-amazon.com/images/S/aplus-media/vc/2c89e3c9-3523-4a1c-9615-27a8b28fa726.__CR0,0,2928,1200_PT0_SX1464_V1___.jpg" alt="" className="checkout-ad" />
      <div className="checkout-section">
        <div className="checkout-section-left">
          {cart?.length > 0 ? (
            <div>
              <h2 className="checkout-title">Shopping Cart</h2>
              {cart.map(item =>
                <CheckoutProduct key={item.id} id={item.id} title={item.title} image={item.image} price={item.price} rating={item.rating} />
              )}
            </div>
          ) : (
              <div>
                <h2>Your Shopping Cart is empty</h2>
                <p>You have no items in your Cart. To buy one or more items, click "Add to Cart" next to the item.</p>
              </div>
            )}
        </div>
        {cart?.length > 0 && (
          <div className="checkout-section-right">
            <Subtotal />
          </div>
        )}
      </div>
    </div>
  )
}

export default Checkout
