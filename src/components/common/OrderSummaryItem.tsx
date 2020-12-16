import React from 'react'
import { Text, View } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

import { useThunkDispatch } from '@utils/store'
import { updateCart } from '@store/cart/actions'
import CartProduct from '@customtypes/cartProduct'
import QuantityController from './QuantityController'
import Brand from './Brand'

interface Props {
  product: CartProduct
}

const OrderSummaryItem: React.FC<Props> = (props) => {
  const { product } = props
  const { quantity, item, amount } = product
  const { price, name, brand } = item
  const dispatch = useThunkDispatch()

  const onPressQuantity = (action: boolean) => (): void => {
    const modifiedQuantity = action ? quantity + 1 : quantity - 1
    const modifiedCartProduct = {
      item,
      quantity: modifiedQuantity,
      amount: price * modifiedQuantity,
    }
    dispatch(updateCart(modifiedCartProduct))
  }

  return (
    <View style={styles.container}>
      <QuantityController onPress={onPressQuantity} quantity={quantity} />
      <View style={styles.detailContainer}>
        <Text style={styles.productName} numberOfLines={4}>
          {name}
        </Text>
        <Brand name={brand} />
      </View>
      <Text style={styles.amount}>₱{amount.toFixed(2)}</Text>
    </View>
  )
}

const styles = EStyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: '$s1',
    borderBottomColor: '$mercury',
    paddingVertical: '$s10',
  },
  detailContainer: {
    flex: 1,
    paddingHorizontal: '$s10',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  productName: {
    fontSize: '$s14',
    fontFamily: '$normal',
    paddingBottom: '$s5',
  },
  amount: {
    fontSize: '$s14',
    fontFamily: '$normal',
  },
})

export default OrderSummaryItem
