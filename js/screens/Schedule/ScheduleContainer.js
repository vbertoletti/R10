import { ActivityIndicator, Text } from "react-native";
import Schedule from "./Schedule";
import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { formatSessionData } from "../../lib/helper";
import FavesContext from "../../context/FavesContext";

const GET_SCHEDULE = gql`
  {
    allSessions {
      startTime
      location
      title
      id
    }
  }
`;

class ScheduleContainer extends Component {
  static navigationOptions = {
    title: "Schedule",
    headerTitleStyle: {
      color: "white",
      fontFamily: "Montserrat"
    }
  };
  render() {
    return (
      <Query query={GET_SCHEDULE}>
        {({ loading, error, data }) => {
          if (loading)
            return <ActivityIndicator color="#0000ff" size="large" />;
          if (error) return <Text>There's an error</Text>;

          return (
            <FavesContext.Consumer>
              {values => {
                return (
                  <Schedule
                    data={formatSessionData(data.allSessions)}
                    navigation={this.props.navigation}
                    context={values}
                  />
                );
              }}
            </FavesContext.Consumer>
          );
        }}
      </Query>
    );
  }
}

export default ScheduleContainer;
