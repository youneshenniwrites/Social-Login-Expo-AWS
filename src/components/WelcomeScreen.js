import React from "react";
import { View, Text, StyleSheet } from "react-native";

const WelcomeScreen = props => (
  <View style={styles.container}>
    <Text>Welcome ot this amazing app.</Text>
  </View>
);
export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
