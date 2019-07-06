import React from "react";
import {
  View,
  StyleSheet,
  ActivityIndicator,
  StatusBar,
  AsyncStorage
} from "react-native";

const AuthLoadingScreen = props => {
  const _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem("userToken");
    props.navigation.navigate(userToken ? "App" : "Auth");
  };

  React.useEffect(() => {
    _bootstrapAsync();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" />
      <ActivityIndicator />
    </View>
  );
};

export default AuthLoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
