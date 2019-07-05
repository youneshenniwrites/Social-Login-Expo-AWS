import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FeedScreen = props => (
  <View style={styles.container}>
    <Text>FeedScreen.</Text>
  </View>
);

export default FeedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
