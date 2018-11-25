import { createStackNavigator, createAppContainer } from "react-navigation";
import AboutStack from "./NavigationLayout";

const AppNavigator = createStackNavigator(
  {
    About: AboutStack
  },
  {
    headerMode: "none"
  }
);
export default createAppContainer(AppNavigator);
