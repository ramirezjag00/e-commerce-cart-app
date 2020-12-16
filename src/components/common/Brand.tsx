import React from 'react'
import { Text, View } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

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
    borderRadius: '$s10',
  },
  brand: {
    fontFamily: '$normal',
    paddingHorizontal: '$s10',
    paddingVertical: '$s5',
    fontSize: '$s10',
  },
})

export default Brand
