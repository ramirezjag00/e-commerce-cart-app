import CartProduct from '@customtypes/cartProduct'
import { ActionType, CartActionTypes } from './types'

const initialState: CartProduct[] = []

const cartReducer = (
  state = initialState,
  action: ActionType,
): CartProduct[] => {
  switch (action.type) {
    case CartActionTypes.UPDATE_CART: {
      if (state.length) {
        const index = state.findIndex(
          (cartProduct: CartProduct) =>
            cartProduct.item.id === action.payload.item.id,
        )
        if (!action.payload.quantity && index > -1) {
          const clonedCart = [...state]
          clonedCart.splice(index, 1)
          state = clonedCart
          return state
        } else if (index === -1) {
          return [...state, action.payload]
        } else if (action.payload.quantity && index > -1) {
          const clonedCart = [...state]
          clonedCart.splice(index, 1, action.payload)
          state = clonedCart
          return state
        }
      } else {
        return [action.payload]
      }
      return state
    }
    default: {
      return state
    }
  }
}

export default cartReducer
