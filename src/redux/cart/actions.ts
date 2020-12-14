import CartProduct from '@customtypes/cartProduct'
import { AddProductToCartType, CartActionTypes } from './types'

const addProductToCart = (product: CartProduct): AddProductToCartType => {
  return {
    type: CartActionTypes.ADD,
    payload: product,
  }
}

export { addProductToCart }
