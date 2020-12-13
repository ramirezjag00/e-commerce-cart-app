import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

import Product from '@customtypes/product'
import products from '../../../data/products.json'
import Categories from './components/Categories'

const DATA_CATEGORIES = products.items
  .reduce((final: string[], obj: Product) => {
    if (!final.includes(obj.category)) {
      return [...final, obj.category]
    } else {
      return [...final]
    }
  }, [])
  .sort()

const ProductsScreen: React.FC = () => {
  const [activeCategory, setCategory] = useState<string>('')

  useEffect(() => {
    if (DATA_CATEGORIES.length) {
      setCategory(DATA_CATEGORIES[0])
    }
  }, [])

  return (
    <ScrollView style={styles.container}>
      <Categories
        data={DATA_CATEGORIES}
        setCategory={setCategory}
        activeCategory={activeCategory}
      />
    </ScrollView>
  )
}

const styles = EStyleSheet.create({
  container: {
    backgroundColor: '$white',
  },
})

export default ProductsScreen
