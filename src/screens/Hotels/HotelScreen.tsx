import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';
import hotels from '../../data/Hotels';

const HotelScreen = () => {
  const route = useRoute();
  const { hotel } = route.params;
  const screenWidth = Dimensions.get('window').width;
  const [quantities, setQuantities] = useState({});

  //Increasing values of items in cart 

  const increaseQty = (id) =>{
    console.log("added item in the cart");
    setQuantities((previous)=>{
      let  current = previous[id] || 0;
      let updated = current + 1;
      return {...previous, [id]: updated} //if writing return then don't use () else use () no return sttmnt needed 
    }
    );
  }

  const decreaseQty = (id) =>{
    console.log("removed item from the cart");
    setQuantities((previous)=>{
      let current = previous[id] || 0 ;
      if(current > 0){
        let updated = current - 1 ;
        return { ...previous , [id] : updated}
      }
      return{
        previous
      }
    }
    )
  }



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
          <Text style={styles.delivery}>
            {hotel.no_of_Delivery}+ successful deliveries 🚀
          </Text>
          <Text style={styles.fee}>₹30 additional distance fee (if far)</Text>
        </View>

       <View style={styles.menu}>
  <FlatList
    data={hotel.menu}
    keyExtractor={(menuItem) => menuItem.id}
    renderItem={({ item: menuItem }) => (
      <View style={styles.card}>
        {/* LEFT SIDE INFO */}
        <View style={styles.cardInfo}>
          <Text style={styles.menuTitle}>{menuItem.name}</Text>
          <Text style={styles.menuDescription}>
            {menuItem.description || "Delicious and freshly prepared"}
          </Text>
          <Text style={styles.menuPrice}>₹{menuItem.price}</Text>
          <Text style={styles.menuRating}>{menuItem.rating}⭐</Text>
        </View>

        {/* RIGHT SIDE IMAGE + COUNTER OVERLAY */}
        <View style={styles.cardRight}>
          <Image
            source={{ uri: menuItem.image }}
            style={styles.menuImage}
          />
          {/* Overlay Counter */}
          <View style={styles.qtyOverlay}>
            <TouchableOpacity
              onPress={() => decreaseQty(menuItem.id)}
            >
              <Text style={styles.qtyText}>-</Text>
            </TouchableOpacity>

            <Text style={styles.qtyValue}>
              {quantities[menuItem.id] || 0}
            </Text>

            <TouchableOpacity
              onPress={() => increaseQty(menuItem.id)}
            >
              <Text style={styles.qtyText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )}
  />
</View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HotelScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  heroImage: {
  width: "90%",   // smaller than full width
  height: 200,    // smaller height
  borderRadius: 16,
  alignSelf: "center",  // center in screen
  marginVertical: 12,
},
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  name: {
    fontSize: 22,
    fontWeight: '700',
    color: '#222',
    marginBottom: 4,
  },
  cuisines: {
    fontSize: 15,
    color: '#777',
    marginBottom: 4,
  },
  address: {
    fontSize: 14,
    color: '#555',
  },
  badgeContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  ratingBadge: {
    backgroundColor: 'green',
    color: '#fff',
    fontWeight: '600',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
    marginBottom: 6,
  },
  photoBadge: {
    backgroundColor: 'deeppink',
    color: '#fff',
    fontWeight: '600',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  quickInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 12,
    paddingHorizontal: 8,
  },
  quickInfoBox: {
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    padding: 12,
    borderRadius: 12,
    flex: 1,
    marginHorizontal: 6,
    elevation: 2,
  },
  quickTitle: {
    fontSize: 13,
    color: '#666',
    marginBottom: 4,
  },
  quickValue: {
    fontSize: 15,
    fontWeight: '600',
    color: '#222',
  },
  extraDetails: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#eae7e7ff',
    backgroundColor: '#f8f8f8',
    marginHorizontal: 8,
    marginTop: 10,
    borderRadius: 8,
  },
  delivery: {
    fontSize: 15,
    color: '#444',
    marginBottom: 4,
  },
  fee: {
    fontSize: 13,
    color: '#888',
  },
  menu: {
    paddingHorizontal: 16,
    marginTop: 12,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  cardInfo: {
    flex: 1,
    paddingRight: 12,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222',
    marginBottom: 4,
  },
  menuDescription: {
    fontSize: 14,
    color: '#777',
    marginBottom: 6,
  },
  menuPrice: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333',
  },
  cardRight: {
  position: "relative", // so overlay works
  alignItems: "center",
  justifyContent: "center",
},
  menuImage: {
  width: 100,
  height: 100,
  borderRadius: 12,
},
  addButton: {
    backgroundColor: '#0aada8',
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    overflow: 'hidden',
  },
  menuRating: {
    fontSize: 12,
    fontWeight: 500,
    color: '#333',
  },
  qtyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ff4d6d',
    borderRadius: 10,
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
  qtyButton: {
    paddingHorizontal: 14,
  },
  qtyText: {
  color: "#fff",
  fontSize: 18,
  fontWeight: "700",
  paddingHorizontal: 6,
},
  qtyValue: {
  color: "#fff",
  fontSize: 16,
  fontWeight: "600",
  marginHorizontal: 4,
},
  qtyOverlay: {
  position: "absolute",
  bottom: 0,                     // snap to bottom edge of image
  left: 0,
  right: 0,                      // stretch across image width
  justifyContent: 'space-evenly',
  alignItems: "center",
  flexDirection: "row",
  backgroundColor: "rgba(0,0,0,0.5)",
  paddingVertical: 2,
  borderBottomLeftRadius : 12,
  borderBottomRightRadius : 12,
},
});
