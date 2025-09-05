import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { Card, Text, Button } from "react-native-paper";
import { SCREENS } from "../routes";
import hotels from "../data/Hotels";


export default function DeliverySummaryScreen({ route, navigation }) {
  const { cartItems, hotelId } = route.params;
  const hotel = hotels.find((h) => h.id === hotelId);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <View style={styles.container}>
      <Card style={styles.hotelCard}>
        <Card.Cover source={{ uri: hotel.featured_image }} />
        <Card.Content>
          <Text variant="titleMedium">{hotel.name}</Text>
          <Text>{hotel.smalladdress}</Text>
          <Text>Delivery in {hotel.time}</Text>
        </Card.Content>
      </Card>

      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card style={styles.itemCard}>
            <Card.Content>
              <Text>{item.name}</Text>
              <Text>₹{item.price} x {item.quantity}</Text>
            </Card.Content>
          </Card>
        )}
      />

      <Card style={styles.totalCard}>
        <Text variant="titleLarge">Grand Total: ₹{total}</Text>
        <Button
          mode="contained"
          onPress={() =>
            navigation.navigate(SCREENS.OrderTracking, {
              order: {
                hotel: hotel.name,
                items: cartItems,
                total,
                status: "Preparing",
              },
            })
          }
        >
          Confirm Order
        </Button>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  hotelCard: { marginBottom: 16 },
  itemCard: { marginBottom: 8 },
  totalCard: { marginTop: 16, padding: 12 },
});
