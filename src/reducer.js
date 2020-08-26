export const initialState = {
  cart: [],
  user: null,
}

export const getCartTotal = cart => cart.reduce((amount, item) => +item.price + amount, 0)

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }
    case 'REMOVE_FROM_CART':
      let newCart = [...state.cart]

      // findIndex() returns the index of the first element in the array
      const idx = state.cart.findIndex(item => item.id === action.payload)

      if (idx >= 0) {
        newCart.splice(idx, 1)
      } else {
        console.warn(`Can not remove product (id: ${action.payload}) as its not in cart.`)
      }

      return { ...state, cart: newCart }
    default:
      return state;
  }
}

export default reducer