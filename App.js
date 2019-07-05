import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";

import SignInScreen from "./src/components/screens/SignInScreen";
import WelcomeScreen from "./src/components/screens/WelcomeScreen";
import FeedScreen from "./src/components/screens/FeedScreen";
import AuthLoadingScreen from "./src/components/screens/AuthLoadingScreen";

const AppStack = createStackNavigator({
  Welcome: WelcomeScreen,
  Feed: FeedScreen
});
const AuthStack = createStackNavigator({ SignIn: SignInScreen });

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "Auth"
    }
  )
);
