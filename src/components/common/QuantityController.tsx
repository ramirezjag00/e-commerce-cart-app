import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

interface Props {
  onPress: (action: boolean) => () => void
  quantity: number
}

const QuantityController: React.FC<Props> = (props) => {
  const { onPress, quantity } = props
  return (
    <View style={styles.controller}>
      <TouchableOpacity
        onPress={onPress(false)}
        style={styles.quantityController}>
        <Text style={styles.controllerLabel}>-</Text>
      </TouchableOpacity>
      <Text style={styles.quantity}>{quantity}</Text>
      <TouchableOpacity
        onPress={onPress(true)}
        style={styles.quantityController}>
        <Text style={styles.controllerLabel}>+</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = EStyleSheet.create({
  controller: {
    width: '30%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  quantityController: {
    height: '$s25',
    width: '$s25',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: '$s1',
    borderColor: '$laurel',
    borderRadius: '$s5',
  },
  controllerLabel: {
    color: '$laurel',
    fontFamily: '$normal',
    fontSize: '$s18',
  },
  quantity: {
    color: '$riverBed',
    fontFamily: '$normal',
    fontSize: '$s20',
  },
})

export default QuantityController
