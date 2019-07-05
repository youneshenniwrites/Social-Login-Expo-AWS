import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AuthLoadingScreen = props => (
  <View style={styles.container}>
    <Text>AuthLoadingScreen</Text>
  </View>
);

export default AuthLoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
