import React from 'react'
import { Text, View } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

import { useTypedSelector } from '@utils/store'
import OrderSummaryItem from './OrderSummaryItem'
import rem from '@utils/remSizeCalculator'

const OrderSummary: React.FC = () => {
  const cart = useTypedSelector((store) => store.cart)
  const cartTotal = cart.reduce(
    (totalAmount, cartProduct) => totalAmount + cartProduct.amount,
    0,
  )

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Order Summary</Text>
      <View style={styles.tableContainer}>
        {cart.map((product) => (
          <OrderSummaryItem product={product} key={product.item.id} />
        ))}
      </View>
      <View style={styles.totalContainer}>
        <Text style={styles.totalLabel}>Total</Text>
        <Text style={styles.totalDetail}>₱{cartTotal.toFixed(2)}</Text>
      </View>
    </View>
  )
}

const styles = EStyleSheet.create({
  container: {
    paddingTop: rem(25),
    paddingHorizontal: rem(20),
  },
  header: {
    fontSize: rem(30),
    color: '$mineShaft',
    fontFamily: '$bold',
  },
  tableContainer: {
    paddingTop: rem(20),
  },
  totalContainer: {
    paddingVertical: rem(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: rem(1),
    borderBottomColor: '$mercury',
  },
  totalLabel: {
    fontSize: rem(18),
    color: '$mineShaft',
    fontFamily: '$bold',
  },
  totalDetail: {
    fontSize: rem(14),
    color: '$mineShaft',
    fontFamily: '$normal',
  },
})

export default OrderSummary
