// DeliverySummaryScreen.js
import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { useCart } from "../context/CartContext";



const DeliverySummaryScreen = () => {
  const { cartItems, hotel, getTotalPrice } = useCart();


  const total = getTotalPrice();

  return (
    <View style={styles.container}>
      {/* Title */}
      <View style={styles.headerBox}>
      <Text style={styles.header}>Delivery Summary</Text>
      </View>
      {/* Hotel Info */}
      <View style={styles.hotelCard}>
        <Text style={styles.hotelName}>{hotel?.name || "No Hotel Selected"}</Text>
        <Text style={styles.subText}>Estimated Delivery: 30 mins</Text>
      </View>

      {/* Items List */}
      <FlatList
        data={cartItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemRow}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>₹{item.price}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={{ textAlign: "center", marginTop: 20, color: "gray" }}>
            No items in cart
          </Text>
        }
        contentContainerStyle={{ paddingBottom: 20 }}
      />

      {/* Bill Section */}
      <View style={styles.billCard}>
        <View style={styles.billRow}>
          <Text style={styles.billLabel}>Items Total</Text>
          <Text style={styles.billValue}>₹{total}</Text>
        </View>
        <View style={styles.billRow}>
          <Text style={styles.billLabel}>Delivery Fee</Text>
          <Text style={styles.billValue}>₹30</Text>
        </View>
        <View style={styles.billRow}>
          <Text style={styles.billLabel}>Taxes</Text>
          <Text style={styles.billValue}>₹15</Text>
        </View>
        <View style={styles.billRow}>
          <Text style={styles.billTotal}>Grand Total</Text>
          <Text style={styles.billTotal}>₹{total + 45}</Text>
        </View>
      </View>
    </View>
  );
};

export default DeliverySummaryScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f9f9f9", padding: 16 },
  header: { fontSize: 22, fontWeight: "bold", marginBottom: 16 , marginTop : 14  },
  headerBox : {
    alignItems : 'center'
  },
  hotelCard: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  hotelName: { fontSize: 18, fontWeight: "bold" },
  subText: { fontSize: 14, color: "gray", marginTop: 4 },
  itemRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderColor: "#eee",
    backgroundColor: "white",
  },
  itemName: { fontSize: 16 },
  itemPrice: { fontSize: 16, fontWeight: "bold" },
  billCard: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 12,
    marginTop: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  billRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  billLabel: { fontSize: 15, color: "gray" },
  billValue: { fontSize: 15, fontWeight: "600" },
  billTotal: { fontSize: 17, fontWeight: "bold" },
});
