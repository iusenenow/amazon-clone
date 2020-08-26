import React from 'react'
import CurrencyFormat from "react-currency-format"
import { useStateValue } from './StateProvider';
import { getCartTotal } from './reducer';

const Subtotal = () => {
  const [{ cart }, dispatch] = useStateValue()

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={value => (
          <>
            <p><strong>Subtotal ({cart.length} items): {`${value}`}</strong></p>
            <small className="subtotal-gift">
              <input type="checkbox" />This order contains a gift.</small>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
