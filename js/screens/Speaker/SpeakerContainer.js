import { View, Text, ActivityIndicator } from "react-native";
import Speaker from "./Speaker";
import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const GET_SPEAKER = gql`
  {
  
  }
`;

class SpeakerContainer extends Component {
  static navigationOptions = {
    title: "Speaker",
    headerTitleStyle: {
      color: "white",
      fontFamily: "Montserrat"
    }
  };
  render() {
    return (
      <Query query={GET_SPEAKER}>
        {({ loading, error, data }) => {
          if (loading)
            return <ActivityIndicator color="#0000ff" size="large" />;
          if (error) return <Text>There's an error</Text>;

          return <Speaker data={data} />;
        }}
      </Query>
    );
  }
}

export default SpeakerContainer;
