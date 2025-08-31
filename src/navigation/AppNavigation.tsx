import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREENS } from '../routes';
import AddToCartScreen from '../screens/Cart/AddToCartScreen';
import HotelScreen from '../screens/Hotels/HotelScreen';
import HomeScreen from '../screens/Home/HomeScreen';

const AppStack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name={SCREENS.Home} component={HomeScreen}/>
        <AppStack.Screen name={SCREENS.Cart} component={AddToCartScreen}/>
        <AppStack.Screen name={SCREENS.Hotels} component={HotelScreen}/>
    </AppStack.Navigator>
  )
}

export default AppNavigation;
