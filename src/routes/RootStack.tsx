import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import RootStackParamList from '@customtypes/navigation/root'
import MainTabs from '@routes/MainTabs'

const Stack = createStackNavigator<RootStackParamList>()

const RootStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={'Main'}>
      <Stack.Screen name="Main" component={MainTabs} />
    </Stack.Navigator>
  )
}

export default RootStack
