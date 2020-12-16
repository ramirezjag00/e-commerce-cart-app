import React from 'react'
import { Platform, Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import rem from '@utils/remSizeCalculator'

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
            size={EStyleSheet.value(rem(25))}
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
    margin: rem(20),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: rem(12),
    paddingHorizontal: rem(20),
    backgroundColor: '$laurel',
    borderRadius: rem(6),
  },
  cartButtonLabel: {
    fontSize: rem(20),
    color: '$white',
    fontFamily: '$bold',
  },
  icon: {
    position: 'relative',
    marginRight: rem(20),
  },
  badge: {
    backgroundColor: '$beautyBush',
    borderRadius: rem(12),
    position: 'absolute',
    top: -5,
    right: -5,
    ...Platform.select({
      ios: {
        paddingVertical: rem(2),
        paddingHorizontal: rem(4),
      },
      android: {
        paddingVertical: rem(1),
        paddingHorizontal: rem(4),
      },
    }),
  },
  badgeLabel: {
    fontSize: rem(12),
    color: '$white',
    fontFamily: '$bold',
  },
})

export default Button
