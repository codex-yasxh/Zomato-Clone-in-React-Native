import { Image, StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';

const HotelComponents = ({ restaurant }) => {
  const screenWidth = Dimensions.get("window").width;

  return (
    <View style={styles.card}>
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
    </View>
  );
};

export default HotelComponents;
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    marginVertical: 12,
    alignItems: "center",   // center content horizontally
    padding: 12,            // spacing inside card
    elevation: 3,           // Android shadow
    shadowColor: "#000",    // iOS shadow
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  image: {
    width: "100%",          // take full width of card
    height: 200,            // fixed height
    resizeMode: "contain",  // show full image, no crop
    marginBottom: 10,
  },
  info: {
    width: "100%",          // text takes full width
    alignItems: "center",   // center text
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  cuisines: {
    color: "#666",
    marginBottom: 6,
    textAlign: "center",
  },
  rating: {
    fontWeight: "600",
    color: "green",
  },
});
