
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import HomeScreen from './src/screens/Home/HomeScreen';
import FirebaseCheck from './src/auth/FirebaseCheck';
import AuthNavigation from './src/navigation/AuthNavigation';
import { NavigationContainer } from '@react-navigation/native';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AuthNavigation/>
    </NavigationContainer>
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
