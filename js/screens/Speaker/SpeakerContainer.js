import { Text } from "react-native";
import Speaker from "./Speaker";
import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Loader from "../../components/Loader";

const GET_SPEAKER = gql`
  query($id: ID!) {
    Speaker(id: $id) {
      bio
      image
      name
      url
      id
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
    return (
      <Query
        query={GET_SPEAKER}
        variables={{ id: this.props.navigation.getParam("id") }}
      >
        {({ loading, error, data }) => {
          if (loading) return <Loader />;
          if (error) return <Text>There's an error</Text>;

          return <Speaker data={data} navigation={this.props.navigation} />;
        }}
      </Query>
    );
  }
}

export default SpeakerContainer;
