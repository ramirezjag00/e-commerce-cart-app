import React from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'
import { Text, View } from 'react-native'

import theme from '@constants/theme'

EStyleSheet.build({
  ...theme.colors,
  ...theme.sizes,
  ...theme.fontFamilies,
})

const App: React.FC = () => {
  return (
    <View>
      <Text>Hello World!</Text>
    </View>
  )
}

export default App
