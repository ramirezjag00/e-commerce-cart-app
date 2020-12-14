import Product from './product'

interface CartProduct {
  quantity: number
  amount: number
  item: Product
}

export default CartProduct
