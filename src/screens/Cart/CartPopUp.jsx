import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Modal, Portal, Button } from 'react-native-paper';

const CartPopUp = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  const showModal = () => setIsVisible(true);
  const hideModal = () => setIsVisible(false);
  return (
    <View>
      <Portal>
        <Modal
          visible={isVisible}
          onDismiss={hideModal}
          contentContainerStyle={styles.bottomSheet}
        >
          <View style={styles.modalContent}>
            <Text style={styles.title}>Hauz Khas Social</Text>
            <Text>Delivery in 30 mins</Text>

            <View style={{ marginTop: 10 }}>
              <Text>Special Chicken Biriyani - ₹190</Text>
              <Text>Egg Fried Rice - ₹160</Text>
            </View>

            <View style={{ marginTop: 20 }}>
              <Text style={{ fontWeight: 'bold' }}>Grand Total: ₹383</Text>
            </View>

            <Button
              mode="contained"
              style={styles.orderBtn}
              onPress={hideModal}
            >
              Place Order
            </Button>
          </View>
        </Modal>
      </Portal>
    </View>
  );
};

export default CartPopUp;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "flex-end", // keeps button at bottom
    backgroundColor: "#f9f9f9",
  },
  cartButtonWrapper: {
    padding: 10,
  },
  cartButton: {
    backgroundColor: "tomato",
    borderRadius: 12,
  },
  bottomSheet: {
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  subtitle: {
    marginBottom: 12,
    color: "gray",
  },
  items: {
    marginVertical: 8,
  },
  totalWrapper: {
    marginTop: 15,
  },
  total: {
    fontWeight: "bold",
    fontSize: 16,
  },
  orderBtn: {
    marginTop: 15,
    backgroundColor: "red",
  },
});
