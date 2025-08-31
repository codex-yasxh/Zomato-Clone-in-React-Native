import { View, ActivityIndicator, StyleSheet, Text, Animated } from 'react-native';
import React, { useEffect, useRef } from 'react';

const SplashScreen = () => {
  const scaleAnim = useRef(new Animated.Value(0.8)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 3,
        tension: 40,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Text
        style={[
          styles.logo,
          {
            transform: [{ scale: scaleAnim }],
            opacity: opacityAnim,
          },
        ]}
      >
        Zomato
      </Animated.Text>

      <Text style={styles.tagline}>Better food, better life.</Text>

      <ActivityIndicator size="large" color="#fff" style={{ marginTop: 30 }} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E23744',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontSize: 64,
    color: '#fff',
    fontWeight: '900',
    fontStyle: 'italic',
    letterSpacing: 3,
  },
  tagline: {
    fontSize: 16,
    color: '#ffeaea',
    marginTop: 8,
    fontStyle: 'italic',
    letterSpacing: 1,
  },
});
