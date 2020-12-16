import React, { Fragment } from 'react'
import { Alert, Dimensions, ScrollView } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

import Header from '@common/Header'
import OrderSummary from '@common/OrderSummary'
import Empty from '@common/Empty'
import { useTypedSelector } from '@utils/store'
import Button from '@common/Button'
import rem from '@utils/remSizeCalculator'

const SCREEN_WIDTH = Dimensions.get('screen').width

const CartScreen: React.FC = () => {
  const cart = useTypedSelector((store) => store.cart)
  const label =
    'It seems like your cart is empty. Go back and add products on your cart.'
  const onPressCheckout = (): void => Alert.alert('Go to checkout page!')

  return (
    <ScrollView
      style={styles.white}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}>
      <Header title={'My Cart'} />
      {cart.length ? (
        <Fragment>
          <OrderSummary />
          <Button
            onPress={onPressCheckout}
            label={'GO TO CHECKOUT'}
            style={styles.buttonStyle}
          />
        </Fragment>
      ) : (
        <Empty label={label} />
      )}
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
  buttonStyle: {
    paddingVertical: rem(18),
  },
})

export default CartScreen
