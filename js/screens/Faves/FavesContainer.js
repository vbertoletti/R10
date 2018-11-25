import { View, ActivityIndicator } from "react-native";
import Faves from "./Faves";
import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import FavesContext from "../../context/FavesContext/FavesProvider";
import { formatSessionData } from "./helper";

const GET_FAVES = gql`
  query($filter: SessionFilter) {
    allSessions(filter: $filter) {
      id
      title
      location
    }
  }
`;

class FavesContainer extends Component {
  static navigationOptions = {
    title: "Faves"
  };
  render() {
    return (
      <FavesContext.Consumer>
        {({ faveIds }) => (
          <Query query={GET_FAVES} variables={{ filter: { id_in: faveIds } }}>
            {({ loading, error, data }) => {
              if (loading)
                return <ActivityIndicator color="#0000ff" size="large" />;
              if (error) return <Text>There's an error</Text>;

              return (
                <Faves
                  faves={formatSessionData(data.allSessions)}
                  faveIds={faveIds}
                />
              );
            }}
          </Query>
        )}
      </FavesContext.Consumer>
    );
  }
}

export default FavesContainer;
