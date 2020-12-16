import React from 'react'
import { Text, View } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

import { useThunkDispatch } from '@utils/store'
import { updateCart } from '@store/cart/actions'
import CartProduct from '@customtypes/cartProduct'
import QuantityController from './QuantityController'
import Brand from './Brand'
import rem from '@utils/remSizeCalculator'

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
    borderBottomWidth: rem(1),
    borderBottomColor: '$mercury',
    paddingVertical: rem(10),
  },
  detailContainer: {
    flex: 1,
    paddingHorizontal: rem(10),
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  productName: {
    fontSize: rem(14),
    fontFamily: '$normal',
    paddingBottom: rem(5),
  },
  amount: {
    fontSize: rem(14),
    fontFamily: '$normal',
  },
})

export default OrderSummaryItem
