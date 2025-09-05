import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Categories from "../../components/Categories";
import ItemComponents from "../../components/ItemComponents";
import hotels from "../../data/Hotels";
import HotelComponents from "../../components/HotelComponents";
import SlidingBanner from "../../components/SlidingBanner";
import { ImageBackground } from "react-native/types_generated/index";
import { SCREENS } from "../../routes";

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
  <View style={styles.leftAppBar}>
    <Text style={styles.locationText}>Delivery to</Text>
    <View style={styles.cityRow}>
      <Text style={styles.cityText}>Your Location</Text>
      <Text style={styles.pinEmoji}>📍</Text>
    </View>
  </View>

  <View style={styles.rightAppBar}>
    <Pressable 
    onPress={()=>navigation.navigate(SCREENS.Profile)}
    style={styles.iconWrapper}
    >
      <Image
        source={{
          uri: "https://media.istockphoto.com/id/1196083861/vector/simple-man-head-icon-set.jpg?s=612x612&w=0&k=20&c=a8fwdX6UKUVCOedN_p0pPszu8B4f6sjarDmUGHngvdM=",
        }}
        style={styles.icon}
      
      />
    </Pressable>
    <Pressable style={styles.iconWrapper}>
      <Image
        source={{
          uri: "https://images.unsplash.com/vector-1738925656520-e5ea818b42cc?q=80&w=880&auto=format&fit=crop",
        }}
        style={styles.icon}
      />
    </Pressable>
  </View>
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
  marginTop: 24,
  marginBottom: 6,
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingHorizontal: 12,
  paddingVertical: 8,
  borderRadius: 12,
},

leftAppBar: {
  flexDirection: "column",
},

cityRow: {
  flexDirection: "row",
  alignItems: "center",
  marginTop: 2,
},

locationText: {
  fontSize: 13,
  color: "#888",
},

cityText: {
  fontSize: 18,
  fontWeight: "700",
  color: "#222",
},

pinEmoji: {
  marginLeft: 4,
  fontSize: 16,
},

rightAppBar: {
  flexDirection: "row",
  alignItems: "center",
  gap: 10, // modern spacing
},

iconWrapper: {
  padding: 8,
  borderRadius: 50,
  elevation: 2,
},

icon: {
  width: 20,
  height: 20,
},

  /** Search Bar */
  searchBar: {
    marginTop: 12,
    backgroundColor: "#f5f5f5",
    borderRadius: 50,
    paddingHorizontal: 16,
    paddingVertical: 6,
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
