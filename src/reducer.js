export const initialState = {
  cart: [
    {
      id: "5",
      title: 'Echo Dot (3rd Gen) – Smart speaker with Alexa - Charcoal Fabric',
      price: 69.00,
      rating: 5,
      image: "https://images-na.ssl-images-amazon.com/images/I/61MdyHSbxHL._AC_UL480_SR480,480_.jpg"
    }
  ],
  user: null,
}

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
        newCart.splice(index, 1)
      } else {
        console.warn(`Can not remove product (id: ${action.payload}) as its not in cart.`)
      }

      return {
        state
      }
    default:
      return state;
  }
}

export default reducer