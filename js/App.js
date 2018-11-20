import React, { Component } from "react";
import { StyleSheet } from "react-native";
import AppNavigator from "./navigation/RootStackNavigator"

export default class App extends Component {
  render() {
    return (
     <AppNavigator />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
