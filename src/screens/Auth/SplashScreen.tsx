import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { SCREENS } from '../../routes';

const SplashScreen = () => {
    const navigation = useNavigation();
  return (
  <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.title}>Zomato</Text>
    </View>

    <View>
       <TouchableOpacity
            onPress={() => navigation.navigate(SCREENS.Login)}>
            <Text style={styles.ButtonText}>Let's Start</Text>
        </TouchableOpacity>
    </View>

  </SafeAreaView>
  );
};

export default SplashScreen

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : '#E23744',
    alignItems : 'center',
    justifyContent : 'space-evenly'
  },
  title : {
    fontSize : 80,
    color : '#ffffff',
    fontFamily: 'poppins.extrabold-italic'
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