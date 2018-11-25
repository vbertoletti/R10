import { Text, ActivityIndicator } from "react-native";
import Speaker from "./Speaker";
import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const GET_SPEAKER = gql`
  query($id: ID!) {
    Speaker(id: $id) {
      bio
      image
      name
      url
    }
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
    const { navigation } = this.props;
    return (
      <Query
        query={GET_SPEAKER}
        variables={{ id: "cjh2ka8z500gs0108v08v6pyk" }}
      >
        {({ loading, error, data }) => {
          if (loading)
            return <ActivityIndicator color="#0000ff" size="large" />;
          if (error) return <Text>There's an error</Text>;

          return <Speaker data={data} navigation={navigation} />;
        }}
      </Query>
    );
  }
}

export default SpeakerContainer;
