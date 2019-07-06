import React from "react";
import { View, Text, StyleSheet, Button, AsyncStorage } from "react-native";

const WelcomeScreen = props => {
  const _showMoreApp = () => {
    props.navigation.navigate("Feed");
  };

  const _signOutAsync = async () => {
    await AsyncStorage.clear();
    props.navigation.navigate("Auth");
  };

  return (
    <View style={styles.container}>
      <Text>Welcome ot this amazing app.</Text>
      <Button title="Show me more of the app" onPress={_showMoreApp} />
      <Button title="Actually, sign me out :)" onPress={_signOutAsync} />
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
