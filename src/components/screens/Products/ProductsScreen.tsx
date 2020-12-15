import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

import Categories from './components/Categories/Categories'
import products from '../../../data/products.json'
import Products from './components/Products/Products'
import categories from '@utils/categories'
import { useTypedSelector } from '@utils/store'
import CartButton from './components/CartButton'
import Search from './components/Search'

const ProductsScreen: React.FC = () => {
  const [activeCategory, setCategory] = useState<string>(categories[0])
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [value, setValue] = useState<string>('')
  const cart = useTypedSelector((store) => store.cart)
  const onChangeSearchInput = (input: string): void => setValue(input)

  useEffect(() => {
    setActiveIndex(categories.indexOf(activeCategory))
  }, [activeCategory, value])

  return (
    <View style={styles.container}>
      <Search value={value} onChangeSearchInput={onChangeSearchInput} />
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
      {!!cart.length && <CartButton />}
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
