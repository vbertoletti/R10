import { View } from "react-native";
import Map from "./Map";
import React, { Component } from "react";

class MapContainer extends Component {
  static navigationOptions = {
    title: "Map"
  };
  render() {
    return (
      <View>
        <Map />
      </View>
    );
  }
}

export default MapContainer;