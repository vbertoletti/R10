import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import About from "../screens/About";

const AboutStack = createStackNavigator({
  About: About
});

export default createBottomTabNavigator(
  {
    About: AboutStack
  },
  {
    tabBarOptions: {
      activeTintColor: "white",
      inactiveTintColor: "#999999",
      labelStyle: { fontSize: 10 },
      style: { backgroundColor: "black" }
    }
  }
);
