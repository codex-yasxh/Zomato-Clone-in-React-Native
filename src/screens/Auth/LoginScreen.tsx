import { StyleSheet, Text, View, TextInput, SafeAreaView, Pressable, Alert } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from '../../routes';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../api/FirebaseConfig';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [Email,setEmail] = useState('');
  const [Password,setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, Email, Password);
      console.log('User Logged in:', userCredential.user);
      navigation.navigate(SCREENS.Home);
      // optionally navigate to Home or other screen here
    } catch (error : any) {
  let message = "Something went wrong!";

  switch (error.code) {
    case 'auth/user-not-found':
      message = 'User does not exist';
      break;
    case 'auth/wrong-password':
      message = 'Invalid password';
      break;
    case 'auth/invalid-email':
      message = 'Invalid email format';
      break;
    case 'auth/too-many-requests':
      message = 'Too many login attempts. Try again later.';
      break;
    default:
      message = 'Invalid credentials. Please try again.';
  }

  Alert.alert('Login Failed', message);
}
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: '#ffffff' }]}>
      <View style={styles.wrapper}>
        <Text style={[styles.title, { color: '#E23744' }]}>Login Screen</Text>

        <TextInput
          placeholder="Enter your email"
          placeholderTextColor="#999999"
          style={[styles.InputField, { borderColor: '#E23744', color: '#000000' }]}
          value={Email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          placeholder="Enter your password"
          placeholderTextColor="#999999"
          secureTextEntry
          style={[styles.InputField, { borderColor: '#E23744', color: '#000000' }]}
          value={Password}
          onChangeText={setPassword}
        />

        <Pressable onPress={handleLogin}>
          <Text style={[styles.ButtonText, { backgroundColor: '#E23744', color: '#ffffff' }]}>
            Login with Email
          </Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate(SCREENS.SignUp)}>
          <Text style={[styles.ButtonText, { backgroundColor: '#E23744', color: '#ffffff' }]}>
            Sign Up with Email
          </Text>
        </Pressable>

        <View style={styles.dividerContainer}>
          <View style={[styles.line, { backgroundColor: '#E23744' }]} />
          <Text style={[styles.orText, { color: '#E23744' }]}>OR</Text>
          <View style={[styles.line, { backgroundColor: '#E23744' }]} />
        </View>

        <Pressable onPress={() => navigation.navigate('Splash')}>
          <Text style={[styles.SplashButtonText, { color: '#E23744' }]}>Back to SplashScreen</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    paddingHorizontal: 20,
    marginTop: 80,
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 50,
  },
  InputField: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  ButtonText: {
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 10,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 25,
  },
  line: {
    flex: 1,
    height: 1,
    marginHorizontal: 10,
  },
  orText: {
    fontSize: 16,
    fontWeight: '500',
  },
  SplashButtonText: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});
