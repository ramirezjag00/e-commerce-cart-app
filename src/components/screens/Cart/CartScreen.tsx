import React from 'react'
import { Dimensions, ScrollView } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

import Header from '@common/Header'
import OrderSummary from '@common/OrderSummary'
import Empty from '@screens/Products/components/Empty'
import { useTypedSelector } from '@utils/store'

const SCREEN_WIDTH = Dimensions.get('screen').width

const CartScreen: React.FC = () => {
  const cart = useTypedSelector((store) => store.cart)
  const label =
    'It seems like your cart is empty. Go back and add products on your cart'
  return (
    <ScrollView
      style={styles.white}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}>
      <Header title={'My Cart'} />
      {cart.length ? <OrderSummary /> : <Empty label={label} />}
    </ScrollView>
  )
}

const styles = EStyleSheet.create({
  container: {
    paddingBottom: SCREEN_WIDTH * 0.2,
  },
  white: {
    backgroundColor: '$white',
  },
})

export default CartScreen
