import React from 'react'
import { Dimensions, ScrollView } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

import Header from '@common/Header'
import OrderSummary from '@common/OrderSummary'

const SCREEN_WIDTH = Dimensions.get('screen').width

const CartScreen: React.FC = () => {
  return (
    <ScrollView
      style={styles.white}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}>
      <Header title={'Cart'} />
      <OrderSummary />
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
