import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  AsyncStorage
} from "react-native";
import * as Facebook from "expo-facebook";
import APP_ID from "../../APP_ID";

const logIn = async props => {
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
      await AsyncStorage.setItem("userToken", token);
      props.navigation.navigate("App");
      Alert.alert("Logged in!", `Hi ${(await response.json()).name}!`);
    } else {
      // type === 'cancel'
    }
  } catch ({ message }) {
    Alert.alert(`Facebook Login Error: ${message}`);
  }
};

const SignInScreen = props => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Sign In</Text>
      <TouchableOpacity onPress={() => logIn(props)}>
        <Text>Log in with facebook</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between"
  }
});
