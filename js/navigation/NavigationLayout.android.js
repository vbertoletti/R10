import React from "react";
import { createDrawerNavigator, createStackNavigator } from "react-navigation";
import About from "./../screens/About";
import Map from "./../screens/Map";
import Schedule from "./../screens/Schedule";
import Faves from "./../screens/Faves";
import { sharedNavigationOptions } from "./config";
import Session from "./../screens/Session";
import { TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const AboutStack = createStackNavigator(
  {
    About: About
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation),
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons
            style={{ marginLeft: 20 }}
            name={"md-menu"}
            size={20}
            color={"white"}
          />
        </TouchableOpacity>
      )
    })
  }
);

const ScheduleStack = createStackNavigator(
  {
    Schedule: Schedule,
    Session: Session
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation),
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons
            style={{ marginLeft: 20 }}
            name={"md-menu"}
            size={20}
            color={"white"}
          />
        </TouchableOpacity>
      )
    })
  }
);
const MapStack = createStackNavigator(
  {
    Map: Map
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation),
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons
            style={{ marginLeft: 20 }}
            name={"md-menu"}
            size={20}
            color={"white"}
          />
        </TouchableOpacity>
      )
    })
  }
);

const FavesStack = createStackNavigator(
  {
    Faves: Faves
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation),
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons
            style={{ marginLeft: 20 }}
            name={"md-menu"}
            size={20}
            color={"white"}
          />
        </TouchableOpacity>
      )
    })
  }
);

export default createDrawerNavigator(
  {
    Schedule: ScheduleStack,
    Map: MapStack,
    Faves: FavesStack,
    About: AboutStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      drawerIcon: ({ horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "About") {
          iconName = `md-information-circle`;
        } else if (routeName === "Schedule") {
          iconName = `md-calendar`;
        } else if (routeName === "Map") {
          iconName = `md-map`;
        } else if (routeName === "Faves") {
          iconName = `md-heart`;
        }

        return (
          <Ionicons
            name={iconName}
            size={horizontal ? 20 : 25}
            color={tintColor}
          />
        );
      }
    }),
    contentOptions: {
      activeTintColor: "#9963ea"
    }
  }
);
