import { View } from "react-native";
import Session from "./Session";
import React, { Component } from "react";

class SessionContainer extends Component {
  static navigationOptions = {
    title: "Session",
    headerTitleStyle: {
      color: "white",
      fontFamily: "Montserrat"
    }
  };
  render() {
    return (
      <View>
        <Session />
      </View>
    );
  }
}

export default SessionContainer;