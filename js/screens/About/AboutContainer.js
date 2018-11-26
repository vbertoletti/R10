import { Text } from "react-native";
import About from "./About";
import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Loader from "../../components/Loader";

const GET_ABOUT = gql`
  {
    allConducts {
      id
      title
      description
    }
  }
`;

class AboutContainer extends Component {
  static navigationOptions = {
    title: "About",
    headerTitleStyle: {
      color: "white",
      fontFamily: "Montserrat"
    }
  };
  render() {
    return (
      <Query query={GET_ABOUT}>
        {({ loading, error, data }) => {
          if (loading) return <Loader />;
          if (error) return <Text>There's an error</Text>;

          return <About data={data} />;
        }}
      </Query>
    );
  }
}

export default AboutContainer;
