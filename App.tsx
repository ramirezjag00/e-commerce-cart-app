import React from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { store, persistor } from '@store/store'
import theme from '@constants/theme'
import RootStack from '@routes/RootStack'

EStyleSheet.build({
  ...theme.colors,
  ...theme.sizes,
  ...theme.fontFamilies,
})

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}

export default App
