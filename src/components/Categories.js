import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Categories = () => {

    const items = [
        {
            id : "1",
            name : "Ratings 4.0+"
        },
        {
            id : "2",
            name : "Offers"
        },
        {
            id : "3",
            name : "Cuisines"
        },
        {
            id : "4",
            name : "Free Delivery"
        },
        {
            id : "5",
            name : "Offers @99"
        },
        {
            id : "6",
            name : "Offers @199"
        },

    ]

  return (
    <View styles={styles.CategoryList}>
      <FlatList 
      horizontal={true}
      data={items}
      keyExtractor={(item)=>item.id}
      showsHorizontalScrollIndicator={false}
      renderItem={({item})=>(
        <Pressable style={styles.CategoryBtn}>
            <Text style={styles.CategoryText}>{item.name}</Text>
        </Pressable>
      )}
      />
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
  CategoryBtn: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    marginHorizontal: 6,
    backgroundColor: '#d0e1e0ff',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 1 },
  },
  CategoryText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
  }
});
