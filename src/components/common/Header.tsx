import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

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
          size={30}
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
    height: 45,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$laurel',
    borderBottomWidth: 1,
    borderBottomColor: '$blackOpaque',
  },
  backButton: {
    position: 'absolute',
    left: 10,
  },
  headerTitle: {
    fontSize: '$s20',
    color: '$mineShaft',
    fontFamily: '$bold',
  },
})

export default HeaderWhite
