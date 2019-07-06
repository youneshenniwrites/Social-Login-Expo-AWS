import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
// import logIn from "../logIn";

const SignInScreen = props => {
  const _signInAsync = async () => {
    await AsyncStorage.setItem("userToken", "abc");
    props.navigation.navigate("App");
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text>Sign In</Text>
      <TouchableOpacity onPress={_signInAsync}>
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
