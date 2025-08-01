import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import firebase from '@react-native-firebase/app';

const FirebaseCheck = () => {
  useEffect(() => {
    if (firebase.apps.length > 0) {
      console.log('✅ Firebase is connected');
    } else {
      console.log('❌ Firebase is NOT connected');
    }

    // Optional: Log default app name
    console.log('🔥 Firebase app name:', firebase.app().name);
  }, []);

  return (
    <View>
      <Text>Check console for Firebase status</Text>
    </View>
  );
};

export default FirebaseCheck;
