import React from 'react'
import { Text, View } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Empty: React.FC = () => {
  return (
    <View style={styles.container}>
      <Icon name={'cart-off'} size={200} color={EStyleSheet.value('$laurel')} />
      <Text style={styles.title}>It seems like we are out of this item</Text>
    </View>
  )
}

const styles = EStyleSheet.create({
  container: {
    paddingTop: 30,
    paddingHorizontal: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    color: '$mineShaft',
    fontFamily: '$bold',
    textAlign: 'center',
    paddingTop: 30,
  },
})

export default Empty
