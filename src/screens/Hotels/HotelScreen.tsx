import { StyleSheet, Text, View, Image, ScrollView, Dimensions, SafeAreaView } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';

const HotelScreen = () => {
  const route = useRoute();
  const { hotel } = route.params; 
  const screenWidth = Dimensions.get("window").width;

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        
        {/* Hero Image */}
        <Image
          source={{ uri: hotel.featured_image }}
          style={styles.heroImage}
        />

        {/* Info Section */}
        <View style={styles.infoContainer}>
          <View style={{ flex: 1 }}>
            <Text style={styles.name}>{hotel.name}</Text>
            <Text style={styles.cuisines}>{hotel.cuisines}</Text>
            <Text style={styles.address}>{hotel.smalladdress}</Text>
          </View>

          {/* Right Side Badges */}
          <View style={styles.badgeContainer}>
            <Text style={styles.ratingBadge}>⭐ {hotel.aggregate_rating}</Text>
            <Text style={styles.photoBadge}>📷 30+ Photos</Text>
          </View>
        </View>

        {/* Quick Info Row */}
        <View style={styles.quickInfoRow}>
          <View style={styles.quickInfoBox}>
            <Text style={styles.quickTitle}>🚴 Mode</Text>
            <Text style={styles.quickValue}>Delivery</Text>
          </View>
          <View style={styles.quickInfoBox}>
            <Text style={styles.quickTitle}>⏱ Time</Text>
            <Text style={styles.quickValue}>{hotel.time}</Text>
          </View>
          <View style={styles.quickInfoBox}>
            <Text style={styles.quickTitle}>🎁 Offers</Text>
            <Text style={styles.quickValue}>{hotel.offer}</Text>
          </View>
        </View>

        {/* Extra Details */}
        <View style={styles.extraDetails}>
          <Text style={styles.delivery}>{hotel.no_of_Delivery}+ successful deliveries 🚀</Text>
          <Text style={styles.fee}>₹30 additional distance fee (if far)</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default HotelScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  heroImage: {
    width: "100%",
    height: Dimensions.get("window").width * 9/16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  name: {
    fontSize: 22,
    fontWeight: "700",
    color: "#222",
    marginBottom: 4,
  },
  cuisines: {
    fontSize: 15,
    color: "#777",
    marginBottom: 4,
  },
  address: {
    fontSize: 14,
    color: "#555",
  },
  badgeContainer: {
    alignItems: "flex-end",
    justifyContent: "center",
  },
  ratingBadge: {
    backgroundColor: "green",
    color: "#fff",
    fontWeight: "600",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
    marginBottom: 6,
  },
  photoBadge: {
    backgroundColor: "deeppink",
    color: "#fff",
    fontWeight: "600",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  quickInfoRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 12,
    paddingHorizontal: 8,
  },
  quickInfoBox: {
    alignItems: "center",
    backgroundColor: "#f7f7f7",
    padding: 12,
    borderRadius: 12,
    flex: 1,
    marginHorizontal: 6,
    elevation: 2,
  },
  quickTitle: {
    fontSize: 13,
    color: "#666",
    marginBottom: 4,
  },
  quickValue: {
    fontSize: 15,
    fontWeight: "600",
    color: "#222",
  },
  extraDetails: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: "#eae7e7ff",
    backgroundColor : "#f8f8f8",
    marginHorizontal : 8,
    marginTop : 10,
    borderRadius : 8
  },
  delivery: {
    fontSize: 15,
    color: "#444",
    marginBottom: 4,
  },
  fee: {
    fontSize: 13,
    color: "#888",
  },
});
