import React, { Component } from "react";
import { StyleSheet } from "react-native";
import AppNavigator from "./navigation/RootStackNavigator";
import { FavesProvider } from "./context/FavesContext/index";
import client from "./config/api";
import { ApolloProvider } from "react-apollo";

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <FavesProvider >
          <AppNavigator />
        </FavesProvider>
      </ApolloProvider>
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
