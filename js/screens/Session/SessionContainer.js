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
    },
    headerTintColor: "#fff"
  };
  render() {
    return (
      <Query
        query={GET_SESSION}
        variables={{ id: this.props.navigation.getParam("key") }}
      >
        {({ loading, error, data }) => {
          if (loading) return <ActivityIndicator size="large" />;
          if (error) return <Text>There's an error</Text>;
          if (data) {
            return (
              <FavesContext.Consumer>
                {({ faveIds, createFave, deleteFave }) => (
                  <Session
                    data={data.Session}
                    createFave={createFave}
                    deleteFave={deleteFave}
                    faveIds={faveIds}
                    navigation={this.props.navigation}
                  />
                )}
              </FavesContext.Consumer>
            );
          }
        }}
      </Query>
    );
  }
}
export default SessionContainer;
