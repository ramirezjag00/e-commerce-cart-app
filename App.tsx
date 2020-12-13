import React from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'
import { NavigationContainer } from '@react-navigation/native'

import theme from '@constants/theme'
import RootStack from '@routes/RootStack'

EStyleSheet.build({
  ...theme.colors,
  ...theme.sizes,
  ...theme.fontFamilies,
})

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  )
}

export default App
