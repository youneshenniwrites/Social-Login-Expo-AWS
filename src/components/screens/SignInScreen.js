import React from "react";
import { StyleSheet, Text, SafeAreaView, TouchableOpacity } from "react-native";
import logIn from "../logIn";

const SignInScreen = props => (
  <SafeAreaView style={styles.container}>
    <Text>Sign In</Text>
    <TouchableOpacity onPress={logIn}>
      <Text>Log in with facebook</Text>
    </TouchableOpacity>
  </SafeAreaView>
);

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between"
  }
});
