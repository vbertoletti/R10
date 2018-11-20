import { View } from "react-native";
import Faves from "./Faves";
import React, { Component } from "react";

class FavesContainer extends Component {
  static navigationOptions = {
    title: "Faves"
  };
  render() {
    return (
      <View>
        <Faves />
      </View>
    );
  }
}

export default FavesContainer;