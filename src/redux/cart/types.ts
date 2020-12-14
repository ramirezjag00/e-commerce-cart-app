import CartProduct from '@customtypes/cartProduct'

enum CartActionTypes {
  ADD = 'ADD_PRODUCT_TO_CART',
}

interface AddProductToCartType {
  type: CartActionTypes.ADD
  payload: CartProduct
}

type ActionType = AddProductToCartType

export { ActionType, AddProductToCartType, CartActionTypes }
