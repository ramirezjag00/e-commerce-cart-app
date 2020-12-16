import React, { Fragment, useEffect, useState } from 'react'
import { View } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import { useNavigation } from '@react-navigation/native'

import Categories from './components/Categories/Categories'
import Products from './components/Products/Products'
import productResults, { defaultCategories } from '@utils/results'
import { useTypedSelector } from '@utils/store'
import Search from './components/Search'
import products from '../../../data/products.json'
import Product from '@customtypes/product'
import Empty from '@common/Empty'
import Button from '@common/Button'

const ProductsScreen: React.FC = () => {
  const navigation = useNavigation()

  const [value, setValue] = useState<string>('')
  const [items, setItems] = useState<Product[]>(products.items)
  const [categories, setCategories] = useState<string[]>(defaultCategories)
  const [activeCategory, setCategory] = useState<string>(defaultCategories[0])
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const cart = useTypedSelector((store) => store.cart)
  const cartTotal = cart.reduce(
    (totalAmount, cartProduct) => totalAmount + cartProduct.amount,
    0,
  )
  const cartQuantity = cart.reduce(
    (totalQuantity, cartProduct) => totalQuantity + cartProduct.quantity,
    0,
  )
  const getResults = async (input: string): Promise<void> => {
    const {
      items: results,
      categories: resultCategories,
    } = await productResults(input)
    setItems(results)
    setCategories(resultCategories)
  }
  const onPressCartButton = (): void => {
    navigation.navigate('Main', {
      screen: 'Products',
      params: {
        screen: 'CartScreen',
      },
    })
  }
  const onChangeSearchInput = (input: string): void => setValue(input)
  const label = 'It seems like we are out of this item'

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
        <Empty label={label} />
      )}
      {!!cart.length && (
        <View style={styles.cartButtonContainer}>
          <Button
            onPress={onPressCartButton}
            icon={'cart'}
            badgeLabel={cartQuantity}
            label={`CART - ₱${cartTotal.toFixed(2)}`}
          />
        </View>
      )}
    </View>
  )
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '$white',
  },
  cartButtonContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '$white',
  },
})

export default ProductsScreen
