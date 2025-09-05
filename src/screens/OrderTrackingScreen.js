import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Card, Text, ProgressBar } from "react-native-paper";

export default function OrderTrackingScreen({ route }) {
  const { order } = route.params;
  const [progress, setProgress] = useState(0.3);
  const [status, setStatus] = useState(order.status);

  // mock auto-progress (replace with Firestore updates later)
  useEffect(() => {
    const stages = ["Preparing", "Out for Delivery", "Delivered"];
    let index = 0;

    const timer = setInterval(() => {
      if (index < stages.length) {
        setStatus(stages[index]);
        setProgress((index + 1) / stages.length);
        index++;
      } else {
        clearInterval(timer);
      }
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleMedium">{order.hotel}</Text>
          <Text>Status: {status}</Text>
          <ProgressBar progress={progress} style={{ marginTop: 12 }} />
          <Text style={{ marginTop: 8 }}>Total: ₹{order.total}</Text>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: "center" },
  card: { padding: 20 },
});
