import React from 'react'
import { Text, View } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import rem from '@utils/remSizeCalculator'

interface Props {
  label: string
}

const Empty: React.FC<Props> = (props) => {
  const { label } = props
  const defaultLabel = 'Under Construction: Dev at work'

  return (
    <View style={styles.container}>
      <Icon
        name={'cart-off'}
        size={EStyleSheet.value(rem(200))}
        color={EStyleSheet.value('$laurel')}
      />
      <Text style={styles.title}>{label || defaultLabel}</Text>
    </View>
  )
}

const styles = EStyleSheet.create({
  container: {
    paddingTop: rem(30),
    paddingHorizontal: rem(40),
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: rem(40),
    color: '$mineShaft',
    fontFamily: '$bold',
    textAlign: 'center',
    paddingTop: rem(30),
  },
})

export default Empty
