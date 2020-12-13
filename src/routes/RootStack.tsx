import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import RootStackParamList from '@customtypes/navigation/root'
import MainTabs from '@routes/MainTabs'

const RootStack = createStackNavigator<RootStackParamList>()

const RootStackRoutes: React.FC = () => {
  return (
    <RootStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={'Main'}>
      <RootStack.Screen name="Main" component={MainTabs} />
    </RootStack.Navigator>
  )
}

export default RootStackRoutes
