import React from 'react'
import { Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

interface Props {
  onPress: () => void
  icon?: string
  badgeLabel?: number | string
  label: number | string
  style?: ViewStyle
}

const Button: React.FC<Props> = (props) => {
  const { onPress, icon, badgeLabel, label, style } = props
  const containerStyle = EStyleSheet.flatten([styles.container, style])
  return (
    <TouchableOpacity onPress={onPress} style={containerStyle}>
      {icon && (
        <View style={styles.icon}>
          <Icon
            name={icon}
            size={EStyleSheet.value('$s25')}
            color={EStyleSheet.value('$white')}
          />
          {badgeLabel && (
            <View style={styles.badge}>
              <Text style={styles.badgeLabel}>{badgeLabel}</Text>
            </View>
          )}
        </View>
      )}
      <Text style={styles.cartButtonLabel}>{label}</Text>
    </TouchableOpacity>
  )
}

const styles = EStyleSheet.create({
  container: {
    margin: '$s20',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: '$s12',
    paddingHorizontal: '$s20',
    backgroundColor: '$laurel',
    borderRadius: '$s6',
  },
  cartButtonLabel: {
    fontSize: '$s20',
    color: '$white',
    fontFamily: '$bold',
  },
  icon: {
    position: 'relative',
    marginRight: '$s20',
  },
  badge: {
    backgroundColor: '$beautyBush',
    borderRadius: '$s12',
    position: 'absolute',
    top: -5,
    right: -5,
    paddingVertical: '$s2',
    paddingHorizontal: '$s4',
  },
  badgeLabel: {
    fontSize: '$s12',
    color: '$white',
    fontFamily: '$bold',
  },
})

export default Button
