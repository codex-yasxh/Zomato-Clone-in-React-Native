import { getAuth, updateProfile } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const SaveHandler = async () => {
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
