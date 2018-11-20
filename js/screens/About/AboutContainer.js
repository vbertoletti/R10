import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Text } from "react-native";

const AboutContainer = () => ({
  render() {
    return (
      <Query
        query={gql`
          {
        `}
      >
        {({ loading, error, data }) => {
          if (loading) return <Text> Loading... </Text>;
          if (error) return <Text> Error... </Text>;
        }}
      </Query>
    );
  }
});

export default AboutContainer;
