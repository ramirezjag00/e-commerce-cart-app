import React, { Fragment, useEffect, useState } from 'react'
import { View } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

import Categories from './components/Categories/Categories'
import Products from './components/Products/Products'
import productResults, { defaultCategories } from '@utils/results'
import { useTypedSelector } from '@utils/store'
import CartButton from './components/CartButton'
import Search from './components/Search'
import products from '../../../data/products.json'
import Product from '@customtypes/product'
import Empty from './components/Empty'

const ProductsScreen: React.FC = () => {
  const [value, setValue] = useState<string>('')
  const getResults = async (input: string): Promise<void> => {
    const {
      items: results,
      categories: resultCategories,
    } = await productResults(input)
    setItems(results)
    setCategories(resultCategories)
  }
  const [items, setItems] = useState<Product[]>(products.items)
  const [categories, setCategories] = useState<string[]>(defaultCategories)
  const [activeCategory, setCategory] = useState<string>(defaultCategories[0])
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const cart = useTypedSelector((store) => store.cart)
  const onChangeSearchInput = (input: string): void => setValue(input)

  useEffect(() => {
    if (items.length && categories.length && value.length >= 3) {
      setCategory(categories[0])
      setActiveIndex(categories.indexOf(activeCategory))
    }
  }, [activeCategory, categories, items.length, value])

  useEffect(() => {
    setActiveIndex(categories.indexOf(activeCategory))
  }, [activeCategory, categories])

  useEffect(() => {
    const fetchResults = async (input: string): Promise<void> =>
      await getResults(input)
    if (value.length >= 3) {
      fetchResults(value)
    } else {
      setCategories(defaultCategories)
      setItems(products.items)
      setCategory(defaultCategories[0])
    }
  }, [value])

  return (
    <View style={styles.container}>
      <Search value={value} onChangeSearchInput={onChangeSearchInput} />
      {items.length ? (
        <Fragment>
          <Categories
            data={categories}
            setCategory={setCategory}
            activeCategory={activeCategory}
          />
          <Products
            categories={categories}
            products={items}
            activeIndex={activeIndex}
          />
        </Fragment>
      ) : (
        <Empty />
      )}
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
