import React from 'react'
import { Text, View } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

import { useTypedSelector } from '@utils/store'
import OrderSummaryItem from './OrderSummaryItem'

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
    paddingTop: 25,
    paddingHorizontal: '$s20',
  },
  header: {
    fontSize: 30,
    color: '$mineShaft',
    fontFamily: '$bold',
  },
  tableContainer: {
    paddingTop: '$s20',
  },
  totalContainer: {
    paddingVertical: '$s20',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '$mercury',
  },
  totalLabel: {
    fontSize: '$s18',
    color: '$mineShaft',
    fontFamily: '$bold',
  },
  totalDetail: {
    fontSize: '$s14',
    color: '$mineShaft',
    fontFamily: '$normal',
  },
})

export default OrderSummary
