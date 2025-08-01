import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home/HomeScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
import SignUpScreen from '../screens/Auth/SignUpScreen';
import ForgotPasswordScreen from '../screens/Auth/ForgotPasswordScreen';
import SplashScreen from '../screens/Auth/SplashScreen';
import { SCREENS } from '../routes';

const AuthStack = createNativeStackNavigator();
const AuthNavigation = () => {
  return (
    <AuthStack.Navigator initialRouteName={SCREENS.Splash} screenOptions={{ headerShown: false}}>

        <AuthStack.Screen name={SCREENS.Splash}component={SplashScreen}/>
        <AuthStack.Screen name={SCREENS.Home}component={HomeScreen}/>
        <AuthStack.Screen name={SCREENS.Login}component={LoginScreen}/>
        <AuthStack.Screen name={SCREENS.SignUp}component={SignUpScreen}/>
        <AuthStack.Screen name={SCREENS.Forgot} component={ForgotPasswordScreen}/>

    </AuthStack.Navigator>
  )
}

export default AuthNavigation;

