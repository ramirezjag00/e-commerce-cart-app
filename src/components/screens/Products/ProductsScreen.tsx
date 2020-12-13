import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

import Categories from './components/Categories/Categories'
import products from '../../../data/products.json'
import Products from './components/Products/Products'
import categories from '@utils/categories'

const ProductsScreen: React.FC = () => {
  const [activeCategory, setCategory] = useState<string>(categories[0])
  const [activeIndex, setActiveIndex] = useState<number>(0)

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
    </View>
  )
}

const styles = EStyleSheet.create({
  container: {
    backgroundColor: '$white',
  },
})

export default ProductsScreen
