import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  Pressable,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from '../../routes';
import { createUser } from '../../services/authService';

const SignUpScreen = () => {
  const navigation = useNavigation();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      const user = await createUser(fullName, email, password);
      navigation.navigate(SCREENS.Home);
      console.log('User Created:', user.email);
      // Optionally navigate or show success toast here
    } catch (error : any) {
    let message = 'Something went wrong!';

    switch (error.code) {
      case 'auth/email-already-in-use':
        message = 'This email is already registered.';
        break;
      case 'auth/invalid-email':
        message = 'Invalid email format.';
        break;
      case 'auth/weak-password':
        message = 'Password should be at least 6 characters.';
        break;
      case 'auth/operation-not-allowed':
        message = 'This operation is not allowed.';
        break;
      default:
        message = 'Signup failed. Please try again.';
    }

    Alert.alert('Signup Failed', message);
  }
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: '#ffffff' }]}>
      <View style={styles.wrapper}>
        <Text style={[styles.title, { color: '#E23744' }]}>Sign Up</Text>

        <TextInput
          onChangeText={setFullName}
          value={fullName}
          placeholder="Enter your full name"
          placeholderTextColor="#999999"
          style={[styles.InputField, { borderColor: '#E23744', color: '#000000' }]}
        />

        <TextInput
          placeholder="Enter your email"
          onChangeText={setEmail}
          value={email}
          placeholderTextColor="#999999"
          style={[styles.InputField, { borderColor: '#E23744', color: '#000000' }]}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          placeholder="Create a password"
          onChangeText={setPassword}
          value={password}
          placeholderTextColor="#999999"
          secureTextEntry
          style={[styles.InputField, { borderColor: '#E23744', color: '#000000' }]}
        />

        <Pressable onPress={handleSignUp}>
          <Text style={[styles.ButtonText, { backgroundColor: '#E23744', color: '#ffffff' }]}>
            Sign Up with Email
          </Text>
        </Pressable>

        <View style={styles.dividerContainer}>
          <View style={[styles.line, { backgroundColor: '#E23744' }]} />
          <Text style={[styles.orText, { color: '#E23744' }]}>OR</Text>
          <View style={[styles.line, { backgroundColor: '#E23744' }]} />
        </View>

        <Pressable onPress={() => navigation.navigate(SCREENS.Login)}>
          <Text style={[styles.SplashButtonText, { color: '#E23744' }]}>
            Back to Login
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;


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
