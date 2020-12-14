import CartProduct from '@customtypes/cartProduct'
import { ActionType, CartActionTypes } from './types'

const initialState: CartProduct[] = []

const cartReducer = (
  state = initialState,
  action: ActionType,
): CartProduct[] => {
  switch (action.type) {
    case CartActionTypes.ADD: {
      if (state.length) {
        const index = state.findIndex(
          (cartProduct: CartProduct) =>
            cartProduct.item.id === action.payload.item.id,
        )
        if (!action.payload.quantity && index > -1) {
          return state.splice(index, 1)
        } else if (index === -1) {
          return [...state, action.payload]
        } else {
          state[index] = action.payload
          return state
        }
      } else {
        return [action.payload]
      }
    }
    default: {
      return state
    }
  }
}

export default cartReducer
