import { ActivityIndicator, Text } from "react-native";
import Schedule from "./Schedule";
import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { formatSessionData } from "./helper";

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

          return <Schedule sessions={formatSessionData(data.allSessions)} />;
        }}
      </Query>
    );
  }


}

export default ScheduleContainer;
