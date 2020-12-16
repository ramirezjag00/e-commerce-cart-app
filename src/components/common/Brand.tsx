import React from 'react'
import { Text, View } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

import rem from '@utils/remSizeCalculator'

interface Props {
  name: string
}

const Brand: React.FC<Props> = (props) => {
  const { name } = props
  return (
    <View style={styles.brandContainer}>
      <Text style={styles.brand}>{name}</Text>
    </View>
  )
}

const styles = EStyleSheet.create({
  brandContainer: {
    alignSelf: 'flex-start',
    backgroundColor: '$albescentWhite',
    borderRadius: rem(10),
  },
  brand: {
    fontFamily: '$normal',
    paddingHorizontal: rem(10),
    paddingVertical: rem(5),
    fontSize: rem(10),
  },
})

export default Brand
