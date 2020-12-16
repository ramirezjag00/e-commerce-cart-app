import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import rem from '@utils/remSizeCalculator'

interface Props {
  title: string
}

const HeaderWhite: React.FC<Props> = (props) => {
  const { title } = props
  const navigation = useNavigation()
  const onPressBack = (): void => {
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressBack} style={styles.backButton}>
        <Icon
          name={'keyboard-backspace'}
          size={EStyleSheet.value(rem(30))}
          color={EStyleSheet.value('$white')}
        />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  )
}

const styles = EStyleSheet.create({
  container: {
    flexDirection: 'row',
    height: rem(45),
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$laurel',
  },
  backButton: {
    position: 'absolute',
    left: 10,
  },
  headerTitle: {
    fontSize: rem(20),
    color: '$white',
    fontFamily: '$bold',
  },
})

export default HeaderWhite
