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
      <Icon
        name={'cart-off'}
        size={EStyleSheet.value('$s200')}
        color={EStyleSheet.value('$laurel')}
      />
      <Text style={styles.title}>{label}</Text>
    </View>
  )
}

const styles = EStyleSheet.create({
  container: {
    paddingTop: '$s30',
    paddingHorizontal: '$s40',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: '$s40',
    color: '$mineShaft',
    fontFamily: '$bold',
    textAlign: 'center',
    paddingTop: '$s30',
  },
})

export default Empty
