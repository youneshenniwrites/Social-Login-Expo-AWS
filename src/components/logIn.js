import * as Facebook from "expo-facebook";
import { Alert } from "react-native";
import APP_ID from "../APP_ID";

const logIn = async () => {
  try {
    const { type, token } = await Facebook.logInWithReadPermissionsAsync(
      APP_ID,
      {
        permissions: ["public_profile"]
      }
    );
    if (type === "success") {
      // Get the user's name using Facebook's Graph API
      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}`
      );
      Alert.alert("Logged in!", `Hi ${(await response.json()).name}!`);
    } else {
      // type === 'cancel'
    }
  } catch ({ message }) {
    Alert.alert(`Facebook Login Error: ${message}`);
  }
};

export default logIn;
