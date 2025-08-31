import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Categories from "../../components/Categories";
import ItemComponents from "../../components/ItemComponents";
import hotels from "../../data/Hotels";
import HotelComponents from "../../components/HotelComponents";
import SlidingBanner from "../../components/SlidingBanner";

const HomeScreen = () => {
  const data = hotels;
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* App Bar */}
        <View style={styles.appBar}>
          <Text style={styles.locationText}>Delivery to</Text>
          <Text style={styles.cityText}>Your Location 📍</Text>
        </View>

        {/* Search Bar */}
        <View style={styles.searchBar}>
          <Image
            source={require("../../assets/logo/searchLogo.png")}
            style={styles.searchIcon}
          />
          <TextInput
            placeholder="Search for restaurants, dishes..."
            placeholderTextColor="#777"
            style={styles.searchInput}
          />
        </View>

        {/* Categories */}
        <View style={styles.CategoryList}>
          <Categories />
        </View>

        {/* Promo Sliding Banner */}
        <View style={styles.bannerWrapper}>
          <SlidingBanner />
        </View>

        {/* Item Components (Food Types / Offers) */}
        <View style={styles.itemsSection}>
          <ItemComponents />
        </View>

        {/* Hotels / Restaurants List */}
        <View style={styles.hotelSection}>
          
          {
          data.map((item) => (
            
            <HotelComponents key={item.id} restaurant={item} />
          
          )
        )
          }
        
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa", // softer than pure white
  },
  scrollContainer: {
    paddingHorizontal: 16,
  },

  /** Top App Bar */
  appBar: {
    marginTop: 40,
    marginBottom: 12,
  },
  locationText: {
    fontSize: 14,
    color: "#999",
  },
  cityText: {
    fontSize: 20,
    fontWeight: "700",
    color: "#222",
  },

  /** Search Bar */
  searchBar: {
    marginTop: 12,
    backgroundColor: "#f5f5f5",
    borderRadius: 50,
    paddingHorizontal: 16,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.07,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2, // Android shadow
  },
  searchIcon: {
    width: 22,
    height: 22,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },

  /** Categories */
  CategoryList: {
    marginTop: 20,
    marginBottom: 10,
  },

  /** Sliding Banner */
  bannerWrapper: {
    marginTop: 10,
    borderRadius: 16,
    overflow: "hidden", // ensures banners have rounded corners
  },

  /** Item Components (Food filters/offers row) */
  itemsSection: {
    marginTop: 20,
  },

  /** Hotel / Restaurants Section */
  hotelSection: {
    marginTop: 24,
    paddingBottom: 40, // breathing space at bottom
  },
});
