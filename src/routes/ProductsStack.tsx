import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import ProductsStackParamList from '@customtypes/navigation/products'
import ProductsScreen from '@screens/Products/ProductsScreen'
import CartScreen from '@screens/Cart/CartScreen'

const ProductsStack = createStackNavigator<ProductsStackParamList>()

const ProductsStackRoutes: React.FC = () => (
  <ProductsStack.Navigator
    initialRouteName="ProductsScreen"
    screenOptions={{ headerShown: false }}>
    <ProductsStack.Screen name="ProductsScreen" component={ProductsScreen} />
    <ProductsStack.Screen name="CartScreen" component={CartScreen} />
  </ProductsStack.Navigator>
)

export default ProductsStackRoutes
