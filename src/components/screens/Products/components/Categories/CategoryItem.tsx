import React from 'react'
import { Text, TouchableOpacity, ViewStyle } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

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
    fontSize: '$s16',
    textAlign: 'center',
    paddingBottom: '$s5',
  },
})

export default ProductItem
