import { View } from "react-native";
import About from "./About";
import React, { Component } from "react";

class AboutContainer extends Component {
  static navigationOptions = {
    title: "About",
    headerTitleStyle: {
      color: "white",
      fontFamily: "Montserrat"
    }
  };
  render() {
    return (
      <View>
        <About />
      </View>
    );
  }
}

export default AboutContainer;
