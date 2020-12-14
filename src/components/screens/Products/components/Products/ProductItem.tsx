import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import { useThunkDispatch } from '@utils/store'
import { addProductToCart } from '@store/cart/actions'

import Product from '@customtypes/product'

interface Props {
  item: Product
}

const CategoryItem: React.FC<Props> = (props) => {
  const { item } = props
  const { price, name, brand } = item
  const dispatch = useThunkDispatch()
  const cartProduct = { item, quantity: 1, amount: price }
  const onPress = (): void => {
    dispatch(addProductToCart(cartProduct))
  }
  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <Text style={styles.title}>{name}</Text>
        <View style={styles.subDetails}>
          <View style={styles.brandContainer}>
            <Text style={styles.brand}>{brand}</Text>
          </View>
          <Text style={styles.price}>₱{price.toFixed(2)}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={onPress} style={styles.cartButton}>
        <Text style={styles.cartButtonLabel}>ADD TO CART</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = EStyleSheet.create({
  container: {
    backgroundColor: '$white',
    paddingHorizontal: '$s20',
    paddingVertical: '$s16',
    borderBottomWidth: 1,
    borderBottomColor: '$mercury',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  details: {
    flex: 1,
    paddingRight: '$s20',
  },
  title: {
    fontFamily: '$normal',
    fontSize: '$s14',
  },
  subDetails: {
    marginTop: '$s5',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  brandContainer: {
    backgroundColor: '$albescentWhite',
    borderRadius: '$s10',
  },
  brand: {
    fontFamily: '$normal',
    paddingHorizontal: '$s10',
    paddingVertical: '$s5',
    fontSize: '$s10',
  },
  price: {
    alignSelf: 'center',
    fontFamily: '$medium',
    fontSize: '$s14',
  },
  cartButton: {
    borderWidth: 1,
    borderColor: '$laurel',
    paddingHorizontal: '$s10',
    paddingVertical: '$s10',
    borderRadius: '$s5',
  },
  cartButtonLabel: {
    color: '$laurel',
    fontFamily: '$normal',
    fontSize: '$s12',
  },
})

export default CategoryItem
