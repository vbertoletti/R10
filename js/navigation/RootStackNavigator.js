import { createStackNavigator, createAppContainer } from "react-navigation";
import NavigationLayout from "./NavigationLayout";
import SpeakerModal from "./../screens/Speaker";

const AppNavigator = createStackNavigator(
  {
    NavigationLayout,
    SpeakerModal: {
      screen: SpeakerModal
    }
  },
  {
    mode: "modal",
    headerMode: "none"
  },
  { headerMode: "none" }
);
export default createAppContainer(AppNavigator);
