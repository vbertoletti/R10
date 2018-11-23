import { View, Text, ActivityIndicator } from "react-native";
import Session from "./Session";
import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const GET_SESSION = gql`
  {
    allSessions {
      id
      title
      description
      speaker {
        id
        image
        url
        name
        bio
      }
      startTime
    }
  }
`;

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
      <Query query={GET_SESSION}>
        {({ loading, error, data }) => {
          if (loading)
            return <ActivityIndicator color="#0000ff" size="large" />;
          if (error) return <Text>There's an error</Text>;

          return <Session data={data} />;
        }}
      </Query>
    );
  }
}

export default SessionContainer;
