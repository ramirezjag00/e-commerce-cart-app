import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import { useThunkDispatch, useTypedSelector } from '@utils/store'
import { updateCart } from '@store/cart/actions'

import Product from '@customtypes/product'
import CartProduct from '@customtypes/cartProduct'

interface Props {
  item: Product
}

const CategoryItem: React.FC<Props> = (props) => {
  const { item } = props
  const { price, name, brand } = item
  const cart = useTypedSelector((store) => store.cart)
  const dispatch = useThunkDispatch()
  const productCartIndex = cart.findIndex(
    (cartItem: CartProduct) => cartItem.item.id === item.id,
  )
  const onPress = (): void => {
    dispatch(
      updateCart({
        item,
        quantity: 1,
        amount: price,
      }),
    )
  }

  const onPressQuantity = (action: boolean) => (): void => {
    const modifiedQuantity = action
      ? cart[productCartIndex].quantity + 1
      : cart[productCartIndex].quantity - 1
    const modifiedCartProduct = {
      item,
      quantity: modifiedQuantity,
      amount: price * modifiedQuantity,
    }
    dispatch(updateCart(modifiedCartProduct))
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
      {productCartIndex === -1 ? (
        <TouchableOpacity onPress={onPress} style={styles.cartButton}>
          <Text style={styles.cartButtonLabel}>ADD TO CART</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.controller}>
          <TouchableOpacity
            onPress={onPressQuantity(false)}
            style={styles.quantityController}>
            <Text style={styles.controllerLabel}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{cart[productCartIndex].quantity}</Text>
          <TouchableOpacity
            onPress={onPressQuantity(true)}
            style={styles.quantityController}>
            <Text style={styles.controllerLabel}>+</Text>
          </TouchableOpacity>
        </View>
      )}
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
    width: '30%',
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
  controller: {
    width: '30%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  quantityController: {
    height: '$s25',
    width: '$s25',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '$laurel',
    borderRadius: '$s5',
  },
  controllerLabel: {
    color: '$laurel',
    fontFamily: '$normal',
    fontSize: '$s18',
  },
  quantity: {
    color: '$riverBed',
    fontFamily: '$normal',
    fontSize: '$s20',
  },
})

export default CategoryItem
