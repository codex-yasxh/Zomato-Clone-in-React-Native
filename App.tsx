import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./src/api/FirebaseConfig";
import AuthNavigation from "./src/navigation/AuthNavigation";
import AppNavigation from "./src/navigation/AppNavigation";
import SplashScreen from "./src/screens/SplashScreen/SplashScreen"; // <-- keep this pure loading splash
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { CartProvider } from "./src/context/CartContext";
import { PaperProvider } from "react-native-paper";
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

  // Always show splash when checking login state
  if (loading) return <SplashScreen />;

  return (
    <CartProvider>
      <PaperProvider>
        <GestureHandlerRootView style={{flex : 1}}>
          <NavigationContainer>
            <StatusBar barStyle="dark-content" />
              {user ? <AppNavigation /> : <AuthNavigation />}
          </NavigationContainer>
        </GestureHandlerRootView>
      </PaperProvider>
    </CartProvider>
  );
}
