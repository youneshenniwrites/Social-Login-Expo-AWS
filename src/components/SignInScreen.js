import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const APP_ID = 433246930850633;

export default function SignInScreen() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text>Log in with facebook</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
