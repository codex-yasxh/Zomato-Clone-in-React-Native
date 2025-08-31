import { Image, StyleSheet, Text, View, Dimensions, Pressable } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from '../routes';


const HotelComponents = ({ restaurant }) => {
  const screenWidth = Dimensions.get("window").width;
  const navigation = useNavigation();

  return (
    <View style={styles.card}>
      <Pressable
      activeOpacity={0.8}
      onPress={()=>navigation.navigate(SCREENS.Hotels, {restaurant})}
      >
      <Image
        style={{
          width: "100%",
          height: screenWidth * 9/16, // 16:9 ratio
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
        }}
        resizeMode="cover"
        source={{ uri: restaurant.featured_image }}
      />

      {/* Info Section */}
      <View style={styles.info}>
        <Text style={styles.name}>{restaurant.name}</Text>
        <Text style={styles.cuisines}>{restaurant.cuisines}</Text>
        <Text style={styles.rating}>⭐ {restaurant.aggregate_rating}</Text>
      </View>
    </Pressable>
    </View>
  );
};

export default HotelComponents;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    marginVertical: 14,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  info: {
    padding: 14,
  },
  name: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 4,
    color: '#222',
  },
  cuisines: {
    color: "#777",
    marginBottom: 6,
    fontSize: 14,
  },
  rating: {
    fontWeight: "600",
    color: "green",
    fontSize: 15,
  },
});
