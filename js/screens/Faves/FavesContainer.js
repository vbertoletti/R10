import React, { Component } from "react";
import Faves from "./Faves";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import FavesContext from "../../context/FavesContext/FavesProvider";
import { Text } from "react-native";
import { formatSessionData } from "../../lib/helper";
import Loader from "../../components/Loader";

const AllSessions = gql`
  query getFaved($filter: SessionFilter) {
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
          <Query query={AllSessions} variables={{ filter: { id_in: faveIds } }}>
            {({ loading, error, data }) => {
              if (loading) return <Loader />;
              if (error) return <Text>There's an error</Text>;
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
