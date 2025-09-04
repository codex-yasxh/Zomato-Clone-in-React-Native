import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const CartScreen = () => {

  const navigation = useNavigation();


  return (
    <View style={styles.container}>
      <Text style={styles.title}>CartScreen</Text>
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  container : {
    flex : 1,
    alignItems : 'center',
    justifyContent : 'center'
  },
  title : {
    fontSize : 20
  }
})