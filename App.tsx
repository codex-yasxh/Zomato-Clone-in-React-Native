import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./src/api/FirebaseConfig";
import AuthNavigation from "./src/navigation/AuthNavigation";
import AppNavigation from "./src/navigation/AppNavigation";
import SplashScreen from "./src/screens/Auth/SplashScreen";

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  if (loading) return <SplashScreen/>; // or splash screen

  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      {user ? <AppNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
}
