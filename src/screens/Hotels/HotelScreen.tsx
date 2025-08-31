import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const HotelScreen = () => {
  const navigation = useNavigation();
  
  return (
    <View>
      <Text>HotelScreen</Text>
    </View>
  )
}

export default HotelScreen

const styles = StyleSheet.create({})