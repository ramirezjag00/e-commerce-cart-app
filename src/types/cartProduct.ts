import Product from './product'

interface CartProduct extends Product {
  quantity: number
  amount: number
}

export default CartProduct
