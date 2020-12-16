import React from 'react'
import { Text, TouchableOpacity, ViewStyle } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

import rem from '@utils/remSizeCalculator'

interface Props {
  style: ViewStyle
  onPress: (item: string) => () => void
  title: string
}

const ProductItem: React.FC<Props> = (props) => {
  const { style, onPress, title } = props
  return (
    <TouchableOpacity style={style} onPress={onPress(title)}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = EStyleSheet.create({
  title: {
    color: '$mineShaft',
    fontFamily: '$bold',
    fontSize: rem(16),
    textAlign: 'center',
    paddingBottom: rem(5),
  },
})

export default ProductItem
