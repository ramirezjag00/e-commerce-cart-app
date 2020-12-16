import React from 'react'
import { SafeAreaView } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import MainTabsParamList from '@customtypes/navigation/main'
import ProductsStackRoutes from '@routes/ProductsStack'
import Empty from '@common/Empty'
import rem from '@utils/remSizeCalculator'

const MainTab = createBottomTabNavigator<MainTabsParamList>()

const MainTabRoutes: React.FC = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <MainTab.Navigator
        initialRouteName="Products"
        //eslint-disable-next-line @typescript-eslint/no-explicit-any
        screenOptions={({ route }: any): object => ({
          tabBarIcon: ({ focused }: { focused: boolean }): React.ReactNode => {
            if (route.name === 'Products') {
              return (
                <Icon
                  name={focused ? 'shopping' : 'shopping-outline'}
                  size={EStyleSheet.value(rem(25))}
                  color={EStyleSheet.value('$laurel')}
                />
              )
            } else if (route.name === 'Profile') {
              return (
                <Icon
                  name={focused ? 'account-box' : 'account-box-outline'}
                  size={EStyleSheet.value(rem(25))}
                  color={EStyleSheet.value('$laurel')}
                />
              )
            }
          },
        })}
        tabBarOptions={{
          labelStyle: styles.tabLabel,
          activeTintColor: EStyleSheet.value('$laurel'),
        }}>
        <MainTab.Screen name="Products" component={ProductsStackRoutes} />
        <MainTab.Screen name="Profile" component={Empty} />
      </MainTab.Navigator>
    </SafeAreaView>
  )
}

const styles = EStyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '$white',
  },
  tabLabel: {
    fontFamily: '$normal',
    textTransform: 'uppercase',
  },
})

export default MainTabRoutes
