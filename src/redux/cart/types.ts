import CartProduct from '@customtypes/cartProduct'

enum CartActionTypes {
  UPDATE_CART = 'UPDATE_CART_CART',
}

interface UpdateCartType {
  type: CartActionTypes.UPDATE_CART
  payload: CartProduct
}

type ActionType = UpdateCartType

export { ActionType, UpdateCartType, CartActionTypes }
