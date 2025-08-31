import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home/HomeScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
import SignUpScreen from '../screens/Auth/SignUpScreen';
import ForgotPasswordScreen from '../screens/Auth/ForgotPasswordScreen';
import { SCREENS } from '../routes';
import WelcomeScreen from '../screens/Auth/WelcomeScreen';

const AuthStack = createNativeStackNavigator();
const AuthNavigation = () => {
  return (
    <AuthStack.Navigator
      initialRouteName={SCREENS.Welcome}
      screenOptions={{ headerShown: false }}
    >
      <AuthStack.Screen name={SCREENS.Welcome} component={WelcomeScreen} />
      <AuthStack.Screen name={SCREENS.Login} component={LoginScreen} />
      <AuthStack.Screen name={SCREENS.SignUp} component={SignUpScreen} />
      <AuthStack.Screen name={SCREENS.Forgot} component={ForgotPasswordScreen}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigation;
