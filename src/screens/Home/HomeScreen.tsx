import { SafeAreaView, StyleSheet, Text, View, TextInput, Image, ScrollView } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
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
          <TextInput
            placeholder="Search for restaurants, dishes..."
            placeholderTextColor="#777"
            style={styles.searchInput}
          />
        </View>
        <View style={styles.titleContainer}>
        <Text style={styles.title}> Hello , Yash ! </Text>
        </View>
        {/* Promo Banner */}
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092' }}
          style={styles.banner}
        />

        {/* Categories */}
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryTitle}>What's on your mind?</Text>
          <View style={styles.categoryRow}>
            <View style={styles.categoryBox}><Text>🍕 Pizza</Text></View>
            <View style={styles.categoryBox}><Text>🍔 Burger</Text></View>
            <View style={styles.categoryBox}><Text>🍜 Noodles</Text></View>
            <View style={styles.categoryBox}><Text>🍩 Dessert</Text></View>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleContainer:{
    alignItems : 'center'
  },
  title: {
  fontSize: 28,
  fontWeight: '700',
  color: '#333',
  marginTop: 16,
  marginBottom: 8,
},
  scrollContainer: {
    paddingHorizontal: 16,
  },
  appBar: {
    marginTop: 40,
  },
  locationText: {
    fontSize: 14,
    color: '#888',
  },
  cityText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  searchBar: {
    marginTop: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  searchInput: {
    fontSize: 16,
    color: '#000',
  },
  banner: {
    height: 160,
    width: '100%',
    borderRadius: 12,
    marginTop: 20,
  },
  categoryContainer: {
    marginTop: 24,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
  },
  categoryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  categoryBox: {
    backgroundColor: '#f7f7f7',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    width: '47%',
    alignItems: 'center',
  },
});
