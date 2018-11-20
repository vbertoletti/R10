import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { ApolloProvider } from "react-apollo";
import client from "../js/config/api";
import { About } from "../js/screens/About/index";

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <View style={styles.container}>
          <About />
        </View>
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
