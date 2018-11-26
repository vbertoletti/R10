import React, { Component } from "react";
import Faves from "./Faves";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import FavesContext from "../../context/FavesContext/FavesProvider";
import { ActivityIndicator, Text } from "react-native";
import { formatSessionData } from "./helper";

const GET_FAVES = gql`
  query getFiltered($filter: SessionFilter) {
    allSessions(filter: $filter) {
      id
      title
      startTime
      location
      speaker {
        id
        name
        bio
        image
        url
      }
    }
  }
`;

class FavesContainer extends Component {
  static navigationOptions = {
    title: "Faves",
    headerTitleStyle: {
      color: "white",
      fontFamily: "Montserrat"
    }
  };
  render() {
    return (
      <FavesContext.Consumer>
        {({ faveIds }) => (
          <Query query={GET_FAVES} variables={{ filter: { id_in: faveIds } }}>
            {({ loading, error, data }) => {
              if (loading) return <ActivityIndicator />;
              if (error) return <Text>{`${error}`}</Text>;
              if (data) {
                return (
                  <Faves
                    faves={formatSessionData(data.allSessions)}
                    faveIds={faveIds}
                    navigation={this.props.navigation}
                  />
                );
              }
            }}
          </Query>
        )}
      </FavesContext.Consumer>
    );
  }
}

export default FavesContainer;
