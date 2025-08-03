

//api/FirebaseConfig.ts

import { initializeApp } from 'firebase/app';

import { getReactNativePersistence, initializeAuth } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';


const FirebaseConfig = {
  apiKey: 'AIzaSyAn-g0ajNARB3y7Xz7RZcUOXumkw_EHsCM',
  authDomain: '', //optional it's not needed in android apps 
  projectId: 'zomatoclone-123abcd',
  storageBucket: '', // optional as we don't have any billing upgrade to use Firebase Storage 
  messagingSenderId: '1001061925688',
  appId: '1:1001061925688:android:190909f748e31ebe0177cd',
};

const app = initializeApp(FirebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { app, auth };