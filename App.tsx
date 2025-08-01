/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
<<<<<<< HEAD
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
=======

import { StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import HomeScreen from './src/screens/Home/HomeScreen';
import FirebaseCheck from './src/auth/firebaseCheck';
>>>>>>> 99363ac (Initial Commit before Navigation Screens)

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <HomeScreen/>
      <FirebaseCheck/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems : 'center',
    justifyContent : 'center'
  },
});

export default App;
