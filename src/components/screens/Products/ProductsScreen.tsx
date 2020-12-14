import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

import Categories from './components/Categories/Categories'
import products from '../../../data/products.json'
import Products from './components/Products/Products'
import categories from '@utils/categories'
import { useTypedSelector } from '@utils/store'
import CartButton from './components/CartButton'

const ProductsScreen: React.FC = () => {
  const [activeCategory, setCategory] = useState<string>(categories[0])
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const cart = useTypedSelector((store) => store.cart)
  const cartTotal = cart.reduce(
    (total, cartProduct) => total + cartProduct.amount,
    0,
  )
  const cartQuantity = cart.reduce(
    (total, cartProduct) => total + cartProduct.quantity,
    0,
  )

  useEffect(() => {
    setActiveIndex(categories.indexOf(activeCategory))
  }, [activeCategory])

  return (
    <View style={styles.container}>
      <Categories
        data={categories}
        setCategory={setCategory}
        activeCategory={activeCategory}
      />
      <Products
        categories={categories}
        products={products.items}
        activeIndex={activeIndex}
      />
      {!!cart.length && (
        <CartButton total={cartTotal} quantity={cartQuantity} />
      )}
    </View>
  )
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '$white',
  },
})

export default ProductsScreen
