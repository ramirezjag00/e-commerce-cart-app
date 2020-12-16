import React from 'react'
import { Text, View } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

interface Props {
  label: string
}

const Empty: React.FC<Props> = (props) => {
  const { label } = props
  return (
    <View style={styles.container}>
      <Icon name={'cart-off'} size={200} color={EStyleSheet.value('$laurel')} />
      <Text style={styles.title}>{label}</Text>
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
