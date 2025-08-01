
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import HomeScreen from './src/screens/Home/HomeScreen';
import FirebaseCheck from './src/auth/firebaseCheck';

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
