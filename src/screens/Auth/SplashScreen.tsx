import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
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

    <View style={styles.ButtonContainer}>
       <TouchableOpacity
            activeOpacity={0.6}
            style={styles.Button}
            onPress={() => navigation.navigate(SCREENS.Login)}>
            <Image
            source={require('../../assets/logo/IceCream.png')}
            style={styles.IceCreamImage}
            onError={(e)=> console.warn('Image Loading Error : ', e.nativeEvent)}
            />
            <Text style={styles.ButtonText}>Start</Text>
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
    fontStyle : 'italic',
    fontWeight : '800',
    letterSpacing : 3
  },
  ButtonContainer: {
  alignItems: 'center',      
  justifyContent: 'center',  
  },
  ButtonText: {
    fontSize : 22,
    color : '#ffffff',
    fontWeight : '700',
    fontStyle : 'italic'
  },
  IceCreamImage : {
    width : 170,
    height : 160,
  },
  Button : {
    alignItems : 'center'
  }
})