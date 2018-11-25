import { Text, ActivityIndicator } from "react-native";
import Session from "./Session";
import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import FavesContext from "../../context/FavesContext";

const GET_SESSION = gql`
  query($id: ID) {
    Session(id: $id) {
      description
      id
      location
      speaker {
        id
        bio
        image
        name
        url
      }
      startTime
      title
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
      <Query
        query={GET_SESSION}
        variables={{ id: "cjh2j37mo163p01221qpcklry" }}
      >
        {({ loading, error, data }) => {
          if (loading) return <ActivityIndicator size="large" />;
          if (error) return <Text>There's an error</Text>;

          return (
            <FavesContext.Consumer>
              //getting favesID
              {values => {
                return <Session data={data} />;
              }}
            </FavesContext.Consumer>
          );
        }}
      </Query>
    );
  }
}

export default SessionContainer;
