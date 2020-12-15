import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { useTypedSelector } from '@utils/store'

const CartButton: React.FC = () => {
  const cart = useTypedSelector((store) => store.cart)
  const [total, setTotal] = useState(0)
  const [quantity, setQuantity] = useState(0)

  useEffect(() => {
    const cartTotal = cart.reduce(
      (totalAmount, cartProduct) => totalAmount + cartProduct.amount,
      0,
    )
    const cartQuantity = cart.reduce(
      (totalQuantity, cartProduct) => totalQuantity + cartProduct.quantity,
      0,
    )
    setTotal(cartTotal)
    setQuantity(cartQuantity)
  }, [cart])

  const onPressCartButton = (): void => console.log('hello')

  return (
    <View style={styles.cartButtonContainer}>
      <TouchableOpacity onPress={onPressCartButton} style={styles.cartButton}>
        <View style={styles.icon}>
          <Icon name={'cart'} size={25} color={EStyleSheet.value('$white')} />
          <View style={styles.badge}>
            <Text style={styles.badgeLabel}>{quantity}</Text>
          </View>
        </View>
        <Text style={styles.cartButtonLabel}>CART - ₱{total.toFixed(2)}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = EStyleSheet.create({
  cartButtonContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    padding: '$s20',
    backgroundColor: '$white',
  },
  cartButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: '$s12',
    paddingHorizontal: '$s20',
    backgroundColor: '$laurel',
    borderRadius: 6,
  },
  cartButtonLabel: {
    fontSize: '$s20',
    color: '$white',
    fontFamily: '$medium',
    paddingLeft: '$s20',
  },
  icon: {
    position: 'relative',
  },
  badge: {
    backgroundColor: '$beautyBush',
    borderRadius: '$s12',
    position: 'absolute',
    top: -5,
    right: -5,
    paddingVertical: 2,
    paddingHorizontal: 4,
  },
  badgeLabel: {
    fontSize: '$s12',
    color: '$white',
    fontFamily: '$bold',
  },
})

export default CartButton
