import { Text } from "react-native";
import Session from "./Session";
import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import FavesContext from "../../context/FavesContext/FavesProvider";
import Loader from "../../components/Loader";

const Sessions = gql`
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
        query={Sessions}
        variables={{ id: this.props.navigation.getParam("key") }}
      >
        {({ loading, error, data }) => {
          if (loading) return <Loader />;
          if (error) return <Text>There's an error</Text>;
          if (data) {
            return (
              <FavesContext.Consumer>
                {values => (
                  <Session
                    data={data.Session}
                    methods={values}
                    faveIds={values.faveIds}
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
