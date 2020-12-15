import CartProduct from '@customtypes/cartProduct'
import { UpdateCartType, CartActionTypes } from './types'

const updateCart = (product: CartProduct): UpdateCartType => {
  return {
    type: CartActionTypes.UPDATE_CART,
    payload: product,
  }
}

export { updateCart }
