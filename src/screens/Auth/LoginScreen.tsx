import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from '../../routes';

const LoginScreen = () => {
  
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
        
      <Text style={styles.title}>Login Screen</Text>
        
      <View style={styles.ButtonContainer}>
        <TouchableOpacity onPress={()=> navigation.goBack()}>
          <Text style={styles.ButtonText}>Back to SplashScreen</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default LoginScreen


const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor: '#00102f',
    alignItems : 'center',
    justifyContent : 'space-evenly'
  },
  title : {
    fontSize : 40,
    color : '#ffffff',
    fontWeight : '700',
    fontStyle : 'italic'
  },
  ButtonContainer : {
    padding : 20,
    margin : 30
  },
  ButtonText: {
    fontSize : 18,
    color : '#ffffff',
    fontWeight : '700',
    fontStyle : 'italic'
  }
})