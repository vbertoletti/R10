import { View } from "react-native";
import Schedule from "./Schedule";
import React, { Component } from "react";

class ScheduleContainer extends Component {
  static navigationOptions = {
    title: "Schedule"
  };
  render() {
    return (
      <View>
        <Schedule />
      </View>
    );
  }
}

export default ScheduleContainer;