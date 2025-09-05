import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import React, { useState,useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { getAuth } from "firebase/auth";
  import { updateProfile } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const ProfileScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState(null);

    // ⚠️ Firebase Auth does NOT have address field by default
useEffect(() => {
  const auth = getAuth();
  const user = auth.currentUser;

  if (user) {
    setEmail(user.email || "");
    setName(user.displayName || "");
    setImage(user.photoURL || null);
    // ⚠️ Firebase Auth does NOT have address field by default
    // You’ll need Firestore to store extra fields like address
  }
}, []);
  // 🔥 Stub: Later hook Expo ImagePicker or RN ImagePicker here
  const handleImageUpload = () => {
    Alert.alert("Upload Image", "This is where ImagePicker logic goes");
  };

  //Handling save button

const handleSave = async () => {
  try {
    const auth = getAuth();
    const db = getFirestore();
    const user = auth.currentUser;

    if (user) {
      // Update Firebase Auth profile
      await updateProfile(user, {
        displayName: name,
        photoURL: image || null,
      });

      // Save custom fields (like address) in Firestore
      await setDoc(doc(db, "users", user.uid), {
        address,
      }, { merge: true });

      Alert.alert("Success", "Profile updated!");
    }
  } catch (error) {
    console.error("Error updating profile:", error);
    Alert.alert("Error", error.message);
  }
};

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fafafa" }}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Profile</Text>
        </View>

        {/* Profile Image */}
        <View style={styles.imageContainer}>
          <TouchableOpacity
            onPress={handleImageUpload}
            activeOpacity={0.7} // gives press feedback
          >
            <Image
              source={
                image
                  ? { uri: image }
                  : {
                      uri: "https://media.istockphoto.com/id/1196083861/vector/simple-man-head-icon-set.jpg?s=612x612&w=0&k=20&c=a8fwdX6UKUVCOedN_p0pPszu8B4f6sjarDmUGHngvdM=",
                    }
              }
              style={styles.profileImage}
              onError={() => {
                // fallback safety → if remote image fails
                setImage(null);
              }}
            />
            <Text style={styles.uploadText}>Upload Image</Text>
          </TouchableOpacity>
        </View>

        {/* Input Fields */}
        <View style={styles.form}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            value={name}
            onChangeText={setName}
          />

          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />

          <Text style={styles.label}>Address</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Enter your address"
            multiline
            numberOfLines={3}
            value={address}
            onChangeText={setAddress}
          />
        </View>

        {/* Save Button */}
        <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
          <Text style={styles.saveBtnText}>Save</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },

  /** Header */
  titleContainer: {
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 12,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    borderRadius: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#333",
  },

  /** Profile Image */
  imageContainer: {
    alignItems: "center",
    marginBottom: 24,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#ddd",
    marginBottom: 8,
    backgroundColor: "#f2f2f2", // placeholder background
  },
  uploadText: {
    fontSize: 14,
    color: "#007AFF",
    fontWeight: "500",
    textAlign: "center",
  },

  /** Form */
  form: {
    marginBottom: 30,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 6,
    color: "#444",
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 16,
  },
  textArea: {
    height: 80,
    textAlignVertical: "top",
  },

  /** Button */
  saveBtn: {
    backgroundColor: "#FF6B00",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
    marginBottom: 40,
  },
  saveBtnText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
