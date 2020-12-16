import React from 'react'
import { View } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

import Header from '@common/Header'

const CartScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header title={'Cart'} />
    </View>
  )
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '$white',
  },
})

export default CartScreen
