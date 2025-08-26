import { FlatList, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ItemComponents = () => {
  const ImageItems = [
    {
      id: "1",
      image: "https://images.unsplash.com/photo-1502462041640-b3d7e50d0662?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Coffee",
    },
    {
      id: "2",
      image: "https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_640.jpg",
      name: "Burger",
    },
    {
      id: "3",
      image: "https://images.unsplash.com/photo-1611270629569-8b357cb88da9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Pasta",
    },
    {
      id: "4",
      image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Fries",
    },
    {
      id: "5",
      image: "https://plus.unsplash.com/premium_photo-1668146927669-f2edf6e86f6f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Sushi",
    },
    {
      id: "6",
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Ice Cream",
    },
    {
      id: "7",
      image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Tacos",
    },
    {
      id: "8",
      image: "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_640.jpg",
      name: "Pizza",
    },
  ];

  return (
    <View>
      <Text style={styles.title}>Eat What Makes You Happy!</Text>

      <FlatList
        data={ImageItems}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Pressable style={styles.card}>
            <ImageBackground
              source={{ uri: item.image }}
              style={styles.image}
              imageStyle={{ borderRadius: 60 }}
            />
            <Text style={styles.label}>{item.name}</Text>
          </Pressable>
        )}
      />
    </View>
  )
}

export default ItemComponents

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginVertical: 14,
    textAlign: 'left',
    color: '#222',
  },
  card: {
    marginRight: 18,
    alignItems: 'center',
  },
  image: {
    width: 90,
    height: 90,
    marginBottom: 6,
    borderRadius: 50,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#eee',
  },
  label: {
    fontWeight: "600",
    textAlign: 'center',
    fontSize: 14,
    color: '#333',
  }
});

