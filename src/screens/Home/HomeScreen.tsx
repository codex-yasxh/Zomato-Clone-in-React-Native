import { SafeAreaView, StyleSheet, Text, View, TextInput, Image, ScrollView } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import categories from '../../components/Categories';
import Categories from '../../components/Categories';
import ItemComponents from '../../components/ItemComponents';
import hotels from '../../data/Hotels';
import HotelComponents from '../../components/HotelComponents';



const HomeScreen = () => {
  const data = hotels;  //Hotel data 
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        
        {/* App Bar */}
        <View style={styles.appBar}>
          <Text style={styles.locationText}>Delivery to</Text>
          <Text style={styles.cityText}>Your Location 📍</Text>
        </View>

        {/* Search Bar */}
        <View style={styles.searchBar}>
          <Image source={require('../../assets/logo/searchLogo.png')} style={styles.searchIcon}/>
          <TextInput
            placeholder="Search for restaurants, dishes..."
            placeholderTextColor="#777"
            style={styles.searchInput}
          />
        </View>
      <View style={styles.CategoryList}>
        <Categories/>
      </View>
      
        {/* Promo Banner */}
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092' }}
          style={styles.banner}
        />

        {/* Categories */}
        <View>
          <ItemComponents/>
        </View>

{/* The map function in JavaScript is used to 
iterate over an array and transform each element into a new value,
 returning a new array with the transformed elements.
 It is a key part of functional programming and
  is commonly used in React to dynamically render lists of components. */}

  {/* data is the array of objects here and will render the components props and 
  map will iterate over the data and
   item will render the particular item where map is positioned */}
      {
        data.map(
          (item)=>
            <HotelComponents restaurant = {item}/>
        )
      }

      </ScrollView>

    
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',  // softer bg than pure white
  },
  scrollContainer: {
    paddingHorizontal: 16,
  },
  appBar: {
    marginTop: 40,
    marginBottom: 12,
  },
  locationText: {
    fontSize: 14,
    color: '#999',
  },
  cityText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#222',
  },
  searchBar: {
    marginTop: 16,
    backgroundColor: '#f5f5f5',
    borderRadius: 50,
    paddingHorizontal: 16,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 1 },
  },
  searchIcon: {
    width: 22,
    height: 22,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  banner: {
    height: 180,
    width: '100%',
    borderRadius: 16,
    marginTop: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  CategoryList: {
    marginTop: 16,
  }
});
